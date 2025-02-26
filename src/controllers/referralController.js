const ReferralModel = require('../models/referralModel');
const UserModel = require('../models/userModel');

const ReferralController = {
  async getUserReferrals(req, res) {
    try {
      const { userId } = req.user;

      const referrals = await ReferralModel.getReferralsByReferrer(userId);

      res.json({ referrals });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching referrals', error: error.message });
    }
  },

  async getReferralStats(req, res) {
    try {
      const { userId } = req.user;

      const referralCount = await ReferralModel.getReferralStats(userId);

      res.json({ referralCount });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching referral stats', error: error.message });
    }
  }
};

module.exports = ReferralController;
