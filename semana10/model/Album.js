const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  nome: { type: String, required: true },
  artista: { type: String, required: true },
  ano: Number,
  generos: Array,
  faixas: { type: Array, required: true },
  lancamento: Date || Number
});

module.exports = mongoose.model('Album', albumSchema);
