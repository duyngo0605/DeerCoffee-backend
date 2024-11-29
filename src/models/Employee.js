const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  yearOfBirth: { type: Number, required: true },
  startedDate: {type: Date, required: true },
  schedule: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shift',
    required: true,
  }],
  hourlyRate: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
