require('dotenv').config();
const jwt = require('jsonwebtoken');

class Verify {
  async verifyToken(req, res, next) {
    const accessToken = req.header.token;
    if (!accessToken) return res.status(401).json('You are not authenticated!');

    try {
      const verified = jwt.verify(accessToken, process.env.TOKEN_SECRET);
      if (!verified) return res.status(401).json('Token verification failed, authorization denied.');
      req.user = verified;
      next();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new Verify();
