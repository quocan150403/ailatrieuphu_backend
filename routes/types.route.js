var express = require('express');
var router = express.Router();

const TypeController = require('../controllers/type.controller');

router.get('/', TypeController.getALl);
router.get('/:id', TypeController.getOne);
router.post('/store', TypeController.create);
router.put('/update/:id', TypeController.update);
router.delete('/delete/:id', TypeController.delete);

module.exports = router;
