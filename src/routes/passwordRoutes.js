const express = require('express');
const PasswordController = require('../controllers/passwordController');

const router = express.Router();

router.post('/forgot-password', PasswordController.forgotPassword);
router.post('/reset-password', PasswordController.resetPassword);

module.exports = router;
