var express = require('express');
var router = express.Router();

const AuthController = require('../controllers/auth.controller');
const UserController = require('../controllers/user.controller');
const Verify = require('../middlewares/verify.middleware');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/refresh-token', AuthController.refreshToken);
router.get('/test', Verify.verifyToken, Verify.verifyAdmin, UserController.getAll);
router.get('/test2', UserController.getAll);

module.exports = router;
