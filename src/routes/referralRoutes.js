const express = require('express');
const ReferralController = require('../controllers/referralController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/referrals', authMiddleware, ReferralController.getUserReferrals);
router.get('/referral-stats', authMiddleware, ReferralController.getReferralStats);

module.exports = router;
