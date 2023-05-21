const mongoose = require('mongoose');

const ProductImage = new mongoose.Schema({
  urlImage: { type: String, required: true },
  order: { type: Number, default: 0 },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ProductImage', ProductImage);
