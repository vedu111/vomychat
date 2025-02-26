const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { sendResetEmail } = require('../services/emailService');
require('dotenv').config();

const prisma = new PrismaClient();
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = await bcrypt.hash(resetToken, 10);
        const expiryDate = new Date(Date.now() + 3600000); 

        const existingToken = await prisma.passwordResetToken.findUnique({
            where: { userId: user.id }
        });

        if (existingToken) {
            await prisma.passwordResetToken.update({
                where: { userId: user.id },
                data: {
                    token: hashedToken,
                    expiresAt: expiryDate
                }
            });
        } else {
            await prisma.passwordResetToken.create({
                data: {
                    userId: user.id,
                    token: hashedToken,
                    expiresAt: expiryDate
                }
            });
        }

        await sendResetEmail(email, resetToken);

        res.json({ message: 'Password reset email sent!' });
    } catch (error) {
        console.error('Error in forgotPassword:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const resetRecord = await prisma.passwordResetToken.findFirst({
            where: { expiresAt: { gte: new Date() } } 
        });

        if (!resetRecord) {
            return res.status(400).json({ message: 'Invalid or expired reset token' });
        }

        const isTokenValid = await bcrypt.compare(token, resetRecord.token);
        if (!isTokenValid) {
            return res.status(400).json({ message: 'Invalid reset token' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { id: resetRecord.userId },
            data: { passwordHash: hashedPassword }
        });

        await prisma.passwordResetToken.delete({ where: { id: resetRecord.id } });

        res.json({ message: 'Password has been reset successfully!' });
    } catch (error) {
        console.error('Error in resetPassword:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
