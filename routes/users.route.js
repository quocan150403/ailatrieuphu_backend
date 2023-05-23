var express = require('express');
var router = express.Router();

const UserController = require('../controllers/user.controller');

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/store', UserController.create);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

module.exports = router;
