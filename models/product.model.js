const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, default: '' },
  slug: { type: String, unique: true, required: true },
  urlImage: { type: String, required: true },
  price: { type: Number, required: true },
  priceOld: { type: Number, default: 0 },
  starRatings: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 },
  soldCount: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  visible: { type: Boolean, default: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Product', Product);
