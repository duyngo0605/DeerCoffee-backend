const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  table: {type: Number},
  items: [
    {
      item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MenuItem',
      required: true,
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
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
  voucher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voucher',
    required: false,
  }
});

module.exports = mongoose.model('Order', orderSchema);
