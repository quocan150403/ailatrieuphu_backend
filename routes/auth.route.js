var express = require('express');
var router = express.Router();

const AuthController = require('../controllers/auth.controller');
const UserController = require('../controllers/user.controller');
const Verify = require('../middlewares/verify_token.middleware');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/test', Verify.verifyToken, UserController.getAll);
router.get('/test2', UserController.getAll);

module.exports = router;
