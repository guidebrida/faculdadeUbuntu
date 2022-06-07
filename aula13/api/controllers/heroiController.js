const Heroi = require('../model/Heroi');

const findAll = async (req, res) => {
  const herois = await Heroi.find();
  if (!herois) {
    return res.status(204).json({ message: 'Nenhum herói encontrado!' });
  }

  res.json(herois);
};

const create = async (req, res) => {
  if (!req?.body?.nome || !req?.body?.url) {
    return res.status(400).json({
      message: 'Nome do herói, número e url da imagem são obrigatórios!'
    });
  }

  try {
    const result = await Heroi.create({
      nome: req.body.nome,
      numero: req.body.numero,
      url: req.body.url
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(503).json({ message: `${err}` });
  }
};

const deleteOne = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: 'ID do herói obrigatório!' });
  }

  try {
    Heroi.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json({ message: 'Herói excluído com sucesso!' });
  } catch (err) {
    res.status(503).json({ message: `${err}` });
  }
};

const updateOne = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: 'ID do herói obrigatório!' });
  }

  try {
    await Heroi.updateOne(
      { _id: req.params.id },
      { nome: req.body.nome, url: req.body.url }
    ).exec();
    const heroiAtualizado = await Heroi.findOne({ _id: req.params.id }).exec();
    res.status(200).json(heroiAtualizado);
  } catch (err) {
    res.status(503).json({ message: `${err}` });
  }
};

module.exports = {
  findAll,
  create,
  deleteOne,
  updateOne
};
