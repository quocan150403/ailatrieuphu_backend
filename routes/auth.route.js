var express = require('express');
var router = express.Router();

const AuthController = require('../controllers/auth.controller');
const Verify = require('../middlewares/verify.middleware');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/refresh-token', AuthController.refreshToken);
router.post('/logout', AuthController.logout);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);
router.post('/change-password', AuthController.changePassword);

module.exports = router;
