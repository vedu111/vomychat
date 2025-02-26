const prisma = require('./index');

const ReferralModel = {
  async createReferral(referrerId, referredUserId) {
    return await prisma.referral.create({
      data: { referrerId, referredUserId },
    });
  },

  async getReferralsByReferrer(referrerId) {
    return await prisma.referral.findMany({
      where: { referrerId },
      include: { referredUser: true },
    });
  },

  async getReferralStats(referrerId) {
    return await prisma.referral.count({ where: { referrerId } });
  },
};

module.exports = ReferralModel;
