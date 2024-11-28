const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
