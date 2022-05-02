const express = require('express')
const { dirname } = require('path')
const app = express()
const porta = 3000
let path = require('path')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render(__dirname+'/index')
  });
  
app.get('/jogar', function (req, res) {
    app.use(express.static(path.resolve(__dirname+'/jogar')))
    res.render(path.resolve(__dirname+'/jogar/singleplayer.html'))
});
app.get('/login', function (req, res) {
    app.use(express.static(path.resolve(__dirname+'/login')))
    res.render(path.resolve(__dirname+'/login/login.html'))
});
app.get('/cadastrar', function (req, res) {
    app.use(express.static(path.resolve(__dirname+'/cadastrar')))
    res.render(path.resolve(__dirname+'/login/cadastrar/cadastrar.html'))
});



app.listen(porta, () =>{
    console.log("Servidor rodando na porta: " + porta)
})
