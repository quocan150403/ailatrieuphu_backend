const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');

class UserController {
  // [GET] api/users
  async getALl(req, res, next) {
    try {
      const data = await UserModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] api/users/:id
  async getOne(req, res, next) {
    try {
      const data = await UserModel.findById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] api/users/store
  async create(req, res, next) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
      const data = new UserModel(req.body);
      const savedUser = await data.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] api/users/update/:id
  async update(req, res, next) {
    try {
      const user = await UserModel.findById(req.params.id);
      // check password
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [DELETE] api/users/delete/:id
  async delete(req, res, next) {
    try {
      await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted');
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new UserController();
