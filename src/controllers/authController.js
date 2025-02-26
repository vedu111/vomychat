const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const ReferralModel = require('../models/referralModel');

const AuthController = {
  async register(req, res) {
    try {
      const { username, email, password, referralCode } = req.body;

      const existingUser = await UserModel.findUserByEmail(email);
      if (existingUser) return res.status(400).json({ message: 'Email already in use' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newReferralCode = username + Math.floor(Math.random() * 10000);

      const newUser = await UserModel.createUser({
        username,
        email,
        passwordHash: hashedPassword,
        referralCode: newReferralCode,
        referredBy: referralCode || null,
      });

      if (referralCode) {
        const referrer = await UserModel.findUserByUsername(referralCode);
        if (referrer) {
          await ReferralModel.createReferral(referrer.id, newUser.id);
        }
      }

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findUserByEmail(email);
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });

      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });

      res.json({ token, userId: user.id });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error: error.message });
    }
  }
};

module.exports = AuthController;
