const express = require('express')
const router = express.Router()
const data = require('../data')

// Retornar todos os personagens
router.get('/', (req, res) =>{
    res.json(data.personagens)
})

// Retornar um personagem especifico
router.get('/:id', (req, res) => {
    const id = req.params.id
    var personagem = data.personagens[id]
    if(!personagem) return res.status(404).json({
        "erro": "Personagem não encontrado"
    })
    res.json(personagem)
})

// Inserir um novo personagem
router.post('/', (req, res) => {
    const personagem = req.body
    if(!personagem.nome) return res.status(400).json({
        "erro": "Personagem precisa ter um 'nome'"
    })
    if(!personagem.raca) return res.status(400).json({
        "erro": "Personagem precisa ter uma 'raca'"
    })
    if(!personagem.idade) return res.status(400).json({
        "erro": "Personagem precisa ter uma 'idade'"
    })
    data.personagens.push(personagem)
    return res.json(personagem)
})

// Substituir um personagem
router.put('/:id', (req, res) => {
    const id = req.params.id
    const novoPersonagem = req.body
    const atualPersonagem = data.personagens[id]
    if(!atualPersonagem) return res.status(404).json({
        "erro": "Personagem não encontrado"
    })

    if(!novoPersonagem.nome) return res.status(400).json({
        "erro": "Personagem precisa ter um 'nome'"
    })
    if(!novoPersonagem.raca) return res.status(400).json({
        "erro": "Personagem precisa ter uma 'raca'"
    })
    if(!novoPersonagem.idade) return res.status(400).json({
        "erro": "Personagem precisa ter uma 'idade'"
    })

    data.personagens[id] = novoPersonagem
    return res.json(novoPersonagem)
})

// Deletar um personagem
router.delete('/:id', (req, res) => {
    const id = req.params.id
    const personagem = data.personagens[id]
    if(!personagem) return res.status(404).json({
        "erro": "Personagem não encontrado"
    })
    var deletado = data.personagens.splice(id, 1)
    res.json(deletado)
})

module.exports = router