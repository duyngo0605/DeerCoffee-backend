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
  actualStartTime: {
    type: Date,
  },
  actualEndTime: {
    type: Date,
  },
});

module.exports = mongoose.model('Shift', shiftSchema);
