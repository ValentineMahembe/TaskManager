const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  dueDate: {
    type: Date
  },
  priority: {
    type: String,
    default: 'Medium'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('task', TaskSchema);
