const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  sname: String,
  srollno: String,
  school: String,
  city: String
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
