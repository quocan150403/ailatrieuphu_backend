const QuestionModel = require('../models/question.model');

class QuestionController {
  // [GET] api/question
  async getALl(req, res, next) {
    try {
      const data = await QuestionModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] api/question/:id
  async getOne(req, res, next) {
    try {
      const data = await QuestionModel.findById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] api/question/get-by-type/:id
  async getByType(req, res, next) {
    try {
      const data = await QuestionModel.find({ typeId: req.params.id });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] api/question/store
  async create(req, res, next) {
    try {
      const data = new QuestionModel(req.body);
      const savedCategory = await data.save();
      res.status(200).json(savedCategory);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] api/question/update/:id
  async update(req, res, next) {
    try {
      const data = await QuestionModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [DELETE] api/question/delete/:id
  async delete(req, res, next) {
    try {
      await QuestionModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Delete successfully');
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new QuestionController();
