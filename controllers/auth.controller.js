require('dotenv').config();
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');

class AuthController {
  async register(req, res, next) {
    const { username, password, confirmPassword } = req.body;

    if (!username || !password || !confirmPassword)
      return res.status(400).json({ message: 'Please fill all the fields' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Password and confirm password not match' });

    try {
      const userExist = await UserModel.findOne({ username: username });
      if (userExist) return res.status(400).json('Username or phone already exist');
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(password, salt);
      const user = new UserModel(req.body);
      const savedUser = await user.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async login(req, res, next) {
    const { username, password } = req.body;
    try {
      const user = await UserModel.findOne({ username: username });
      if (!user) return res.status(404).json('User not found');
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) return res.status(400).json('Wrong password');

      const { password: hashedPassword, ...info } = user._doc;
      res.status(200).json({ ...info });
    } catch (error) {
      req.status(500).json(error);
    }
  }

  async logout(req, res, next) {
    try {
      res.clearCookie('refreshToken', { path: '/' });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new AuthController();
