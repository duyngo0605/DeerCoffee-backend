const mongoose = require('mongoose');

const itemTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('ItemType', itemTypeSchema); 