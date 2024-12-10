const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {type: String},
  itemType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemType',
    required: true
  }
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
