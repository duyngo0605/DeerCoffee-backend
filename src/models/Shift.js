const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  scheduledStartTime: {
    type: Date,
    required: true,
  },
  scheduledEndTime: {
    type: Date,
    required: true,
  },
  hoursWorked: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model('Shift', shiftSchema);
