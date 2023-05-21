const mongoose = require('mongoose');

const BillDetail = new mongoose.Schema({
  urlImage: { type: String, default: '' },
  name: { type: String, default: '' },
  quantity: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  visible: { type: Boolean, default: true },
  billId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bill' },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BillDetail', BillDetail);
