const mongoose = require('mongoose');

const User = new mongoose.Schema({
  role: { type: String, default: 'user' },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  urlAvatar: { type: String, default: '' },
  score: { type: Number, default: 0 },
  visible: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);
