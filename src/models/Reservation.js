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
    type: Number, 
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model('Reservation', reservationSchema);
