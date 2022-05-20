const Joi = require('joi');

module.exports = Joi.object({
  nome: Joi.string().max(30).required(),
  idade: Joi.number().integer().min(0).max(110).required(),
  nascimento: Joi.string().min(8).max(10).required(),
  cpf: Joi.string().min(11).max(11).required(),
  telefone: Joi.string().min(13),
  email: Joi.string().email(),
  profissao: Joi.string()
});
