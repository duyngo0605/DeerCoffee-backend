const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  reservationDate: {
    type: Date,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String, 
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('Reservation', reservationSchema);
