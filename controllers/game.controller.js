const GameModel = require('../models/game.model');

class GameController {
  // [GET] api/types
  async getALl(req, res, next) {
    try {
      const data = await GameModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] api/types/:id
  async getOne(req, res, next) {
    try {
      const data = await GameModel.findById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] api/types/store
  async create(req, res, next) {
    try {
      const data = new GameModel(req.body);
      const savedCategory = await data.save();
      res.status(200).json(savedCategory);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] api/types/update/:id
  async update(req, res, next) {
    try {
      const data = await GameModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [DELETE] api/types/delete/:id
  async delete(req, res, next) {
    try {
      await GameModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Delete successfully');
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new GameController();
