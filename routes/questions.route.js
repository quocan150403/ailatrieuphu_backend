var express = require('express');
var router = express.Router();

const QuestionController = require('../controllers/question.controller');

router.get('/', QuestionController.getALl);
router.get('/:id', QuestionController.getOne);
router.post('/store', QuestionController.create);
router.put('/update/:id', QuestionController.update);
router.delete('/delete/:id', QuestionController.delete);
router.get('/get-by-type/:id', QuestionController.getByType);

module.exports = router;
