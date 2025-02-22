const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  term: { type: String, required: true, unique: true },
  count: { type: Number, default: 1 },
});

searchSchema.index({ term: 1 });

module.exports = mongoose.model('Search', searchSchema);