const mongoose = require('mongoose');
const Schema = mongoose.Schema;




// Create Schema
const ItemSchema = new Schema({
  email:  String,
  name: String,
  title:   String,
  post: String,
  text: String, 
  date: { type: Date, 
    default: Date.now }
});

module.exports = Item = mongoose.model('item', ItemSchema);