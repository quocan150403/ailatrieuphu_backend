require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

class AuthController {
  async register(req, res, next) {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword)
      return res.status(400).json({ message: 'Please fill all the fields' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Password and confirm password not match' });

    try {
      const userExist = await UserModel.findOne({ $or: [{ username: username }, { email: email }] });
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
      const user = await UserModel.findOne({ $or: [{ username: username }, { email: username }] });
      if (!user) return res.status(404).json('User not found');
      const passwordMatch = bcrypt.compare(password, user.password);
      if (!passwordMatch) return res.status(400).json('Wrong password');

      const accessToken = jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        process.env.TOKEN_SECRET,
        { expiresIn: '30s' },
      );

      const refreshToken = jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '365d' },
      );

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'strict',
      });

      const { password: hashedPassword, ...info } = user._doc;
      res.status(200).json({ ...info, accessToken });
    } catch (error) {
      req.json;
    }
  }
}

module.exports = new AuthController();
