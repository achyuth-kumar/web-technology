const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: 'String',
    required: true
  },
  usn: {
    type: 'String',
    required: true
  },
  dept: {
    type: 'String',
    required: true
  },
  grade: {
    type: 'Number',
    required: true
  },
});

module.exports = mongoose.model('Student', studentSchema);
