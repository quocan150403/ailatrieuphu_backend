var express = require('express');
var router = express.Router();

const AwardController = require('../controllers/award.controller');

router.get('/', AwardController.getALl);
router.get('/:id', AwardController.getOne);
router.post('/store', AwardController.create);
router.put('/update/:id', AwardController.update);
router.delete('/delete/:id', AwardController.delete);

module.exports = router;
