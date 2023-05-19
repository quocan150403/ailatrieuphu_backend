const mongoose = require('mongoose');

const User = new mongoose.Schema({
  role: { type: String, default: 'user' },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  visible: { type: Boolean, default: true },
  subscribeList: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);
