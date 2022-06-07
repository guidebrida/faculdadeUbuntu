const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroiSchema = new Schema({
  nome: { type: String },
  url: { type: String }
});

module.exports = mongoose.model('Heroi', heroiSchema);
