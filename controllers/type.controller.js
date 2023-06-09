const TypeModel = require('../models/type.model');

class TypeController {
  // [GET] api/types
  async getALl(req, res, next) {
    try {
      const data = await TypeModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] api/types/:id
  async getOne(req, res, next) {
    try {
      const data = await TypeModel.findById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] api/types/store
  async create(req, res, next) {
    try {
      const data = new TypeModel(req.body);
      const savedCategory = await data.save();
      res.status(200).json(savedCategory);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] api/types/update/:id
  async update(req, res, next) {
    try {
      const data = await TypeModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [DELETE] api/types/delete/:id
  async delete(req, res, next) {
    try {
      await TypeModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Delete successfully');
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new TypeController();
