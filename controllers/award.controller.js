const AwardModel = require('../models/award.model');

class AwardController {
  // [GET] api/awards
  async getALl(req, res, next) {
    try {
      const data = await AwardModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] api/awards/:id
  async getOne(req, res, next) {
    try {
      const data = await AwardModel.findById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] api/awards/store
  async create(req, res, next) {
    try {
      const data = new AwardModel(req.body);
      const savedCategory = await data.save();
      res.status(200).json(savedCategory);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] api/awards/update/:id
  async update(req, res, next) {
    try {
      const data = await AwardModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [DELETE] api/awards/delete/:id
  async delete(req, res, next) {
    try {
      await AwardModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Delete successfully');
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new AwardController();
