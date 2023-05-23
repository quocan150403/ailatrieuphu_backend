require('dotenv').config();
const jwt = require('jsonwebtoken');

class Verify {
  async verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json('You are not authenticated!');

    try {
      const accessToken = token.split(' ')[1];
      const verified = jwt.verify(accessToken, process.env.TOKEN_SECRET);
      if (!verified) return res.status(401).json('Token is not valid!');
      req.user = verified;
      next();
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async verifyRefreshToken(req, res, next) {}

  async verifyAdmin(req, res, next) {
    if (req.user.role !== 'admin') return res.status(403).json('You are not allowed to do that!');
    next();
  }
}

module.exports = new Verify();
