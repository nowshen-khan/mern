const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String }, // for storing file path (image)
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', studentSchema);