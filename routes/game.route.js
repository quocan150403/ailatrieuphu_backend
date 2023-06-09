var express = require('express');
var router = express.Router();

const GameController = require('../controllers/game.controller');

router.get('/', GameController.getALl);
router.get('/:id', GameController.getOne);
router.post('/store', GameController.create);
router.put('/update/:id', GameController.update);
router.delete('/delete/:id', GameController.delete);

module.exports = router;
