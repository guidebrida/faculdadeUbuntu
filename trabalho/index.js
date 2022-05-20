const express = require('express')
const { json } = require('express/lib/response')
const { dirname } = require('path')
const fs = require('fs');
const app = express()
const porta = 3000
let path = require('path');
const { error } = require('console');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render(__dirname+'/index')
  });
  
app.get('/jogar', function (req, res) {
    app.use(express.static(path.resolve(__dirname+'/jogar')))
    res.render(path.resolve(__dirname+'/jogar/singleplayer.html'))
});
app.get('/jogarMultiplayer', function (req, res) {
    app.use(express.static(path.resolve(__dirname+'/jogarMultiplayer')))
    res.render(path.resolve(__dirname+'/jogarMultiplayer/multiplayer.html'))
});

app.get('/login', function (req, res) {
    app.use(express.static(path.resolve(__dirname+'/login')))
    res.render(path.resolve(__dirname+'/login/login.html'))
});
app.get('/cadastrar', function (req, res) {
    app.use(express.static(path.resolve(__dirname+'/login/cadastrar')))
    res.render(path.resolve(__dirname+'/login/cadastrar/cadastrar.html'))
});

app.post('/cadastrar', (req, res) => {
    const personagem = req.body;
    console.log(personagem)
    fs.appendFile("Arquivo.json", JSON.stringify(personagem), (error) => {})
});

app.listen(porta, () =>{
    console.log("Servidor rodando na porta: " + porta)
})