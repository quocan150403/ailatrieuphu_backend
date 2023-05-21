var express = require('express');
var router = express.Router();

const CategoryController = require('../controllers/category.controller');

router.get('/', CategoryController.getALl);
router.get('/:id', CategoryController.getOne);
router.post('/store', CategoryController.create);
router.put('/update/:id', CategoryController.update);
router.delete('/delete/:id', CategoryController.delete);

module.exports = router;
