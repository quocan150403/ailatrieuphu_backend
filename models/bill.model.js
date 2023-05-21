const mongoose = require('mongoose');

const Bill = new mongoose.Schema({
  paymentMethod: { type: String, default: 'cash' },
  shippingMethod: { type: String, default: 'normal' },
  shippingFee: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  status: { type: String, default: 'pending' },
  note: { type: String, default: '' },
  visible: { type: Boolean, default: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bill', Bill);
