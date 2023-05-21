var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/product.controller');

router.get('/', ProductController.getALl);
router.get('/:id', ProductController.getOne);
router.post('/store', ProductController.create);
router.put('/update/:id', ProductController.update);
router.delete('/delete/:id', ProductController.delete);

module.exports = router;
