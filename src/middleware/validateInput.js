const { body, validationResult } = require('express-validator');

const validateRegistration = [
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long.'),
    body('email').isEmail().withMessage('Invalid email format.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateLogin = [
    body('email').isEmail().withMessage('Invalid email format.'),
    body('password').notEmpty().withMessage('Password is required.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateForgotPassword = [
    body('email').isEmail().withMessage('Invalid email format.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateResetPassword = [
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateRegistration,
    validateLogin,
    validateForgotPassword,
    validateResetPassword
};
