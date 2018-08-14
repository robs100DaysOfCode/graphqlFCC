const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number
  // books: [String]
});

module.exports = mongoose.model('Author', authorSchema);
// this can be imported just as book
