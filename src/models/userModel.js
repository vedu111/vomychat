const prisma = require('./index');

const UserModel = {
    async createUser(data) {
        return await prisma.user.create({
          data: {
            username: data.username,
            email: data.email,
            passwordHash: data.passwordHash,
            referralCode: data.referralCode,
            referredBy: data.referredBy || null,
          },
        });
      },

  async findUserByEmail(email) {
    return await prisma.user.findUnique({ where: { email } });
  },

  async findUserByUsername(username) {
    return await prisma.user.findUnique({ where: { username } });
  },

  async getUserById(id) {
    return await prisma.user.findUnique({ where: { id } });
  },

  async getUserReferrals(userId) {
    return await prisma.referral.findMany({
      where: { referrerId: userId },
      include: { referredUser: true },
    });
  },
};

module.exports = UserModel;
