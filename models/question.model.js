const mongoose = require('mongoose');

const Question = new mongoose.Schema({
  content: { type: String, required: true },
  options: { type: Array, required: true },
  correctOptionIndex: { type: Number, required: true },
  level: { type: Number, required: true },
  typeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Type' },
  visible: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', Question);
