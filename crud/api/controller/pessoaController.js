const saveData = (data) => {
  const fs = require('fs');
  const path = require('path');
  fs.writeFile(path.join(__dirname, '../data/pessoa.json'), JSON.stringify(data), (err) => {
    if (err) throw err;
  });
};

module.exports = () => {
  const pessoas = require('../data/pessoa.json');
  const pessoaSchema = require('../models/pessoaSchema');
  const controller = {};

  controller.findAll = (req, res) => {
    res.status(200).json(pessoas);
  };

  controller.findById = (req, res) => {
    let id = req.params.id;
    let pessoa = pessoas[id];
    if (!pessoa) {
      res.status(400).json({ erro: 'Id nao encontrado!' });
    }
    res.status(200).json(pessoa);
  };

  controller.create = (req, res) => {
    const { error } = pessoaSchema.validate(req.body);

    if (!error) {
      pessoas.push(req.body);
      saveData(pessoas);
      res.status(200).json(pessoas);
    } else {
      const { details } = error;
      const message = details.map((item) => item.message).join(',');
      res.status(400).json({ error: message });
    }
  };

  controller.update = (req, res) => {
    let id = req.params.id;
    const { error } = pessoaSchema.validate(req.body);

    if (!pessoas[id]) {
      res.status(400).json({ erro: 'Id nao encontrado!' });
      return;
    }

    if (!error) {
      pessoas[id] = req.body;
      saveData(pessoas);
      res.status(200).json(pessoas);
    } else {
      const { details } = error;
      const message = details.map((item) => item.message).join(',');
      res.status(400).json({ error: message });
    }
  };

  controller.delete = (req, res) => {
    let id = req.params.id;

    if (!pessoas[id]) {
      res.status(400).json({ erro: 'Id nao encontrado!' });
      return;
    }
    pessoas.splice(id, 1);
    saveData(pessoas);
    res.status(200).json(pessoas);
  };

  return controller;
};
