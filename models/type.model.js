const mongoose = require('mongoose');

const Type = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  order: { type: Number, default: 0 },
  visible: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Type', Type);
