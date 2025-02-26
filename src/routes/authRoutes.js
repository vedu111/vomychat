const express = require('express');
const AuthController = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../middleware/validateInput');
const { loginLimiter, registerLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post('/register', registerLimiter, validateRegistration, AuthController.register);
router.post('/login', loginLimiter, validateLogin, AuthController.login);

module.exports = router;
