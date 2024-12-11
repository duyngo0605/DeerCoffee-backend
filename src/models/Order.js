const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  table: {type: Number},
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuItem',
    required: true,
  }],
  totalAmount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending',
    required: true,
  },
});

module.exports = mongoose.model('Order', orderSchema);
