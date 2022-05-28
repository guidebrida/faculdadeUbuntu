const Album = require('../model/Album');

const findAll = async (req, res) => {
  const albuns = await Album.find();

  if (!albuns) {
    return res.status(204).json({ message: 'Nenhum album encontrado!' });
  }

  res.json(albuns);
};

const create = async (req, res) => {
  if (!req?.body?.nome || !req?.body?.artista || !req?.body?.faixas) {
    return res.status(400).json({
      message: 'Nome do album, nome do artista e faixas sao obrigatorios!'
    });
  }

  try {
    const result = await Album.create({
      nome: req.body.nome,
      artista: req.body.artista,
      ano: req.body.ano,
      generos: req.body.generos,
      faixas: req.body.faixas,
      lancamento: req.body.lancamento
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

const findById = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: 'ID do album obrigatorio!' });
  }

  const album = await Album.findOne({ _id: req.params.id }).exec();
  if (!album) {
    return res
      .status(204)
      .json({ message: `ID ${req.params.id} nao encontrado!` });
  }
  res.json(album);
};

module.exports = {
  findAll,
  create,
  findById
};
