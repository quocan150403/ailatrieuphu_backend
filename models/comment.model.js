const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
  starRating: { type: Number, default: 0 },
  content: { type: String, default: '' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  visible: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', Comment);
