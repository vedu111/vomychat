const express = require('express');

const authRoutes = require('./authRoutes');
const referralRoutes = require('./referralRoutes');
const passwordRoutes = require('./passwordRoutes');

const router = express.Router();

router.use('/api', authRoutes);
router.use('/api', referralRoutes);
router.use('/api', passwordRoutes);

module.exports = router;
