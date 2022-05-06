const express = require('express')
const { redirect } = require('express/lib/response')
const { dirname } = require('path')
const app = express()
const porta = 3000
let logado = false
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
app.get('/jogarMultiplayer', function (req, res) {
    app.use(express.static(path.resolve(__dirname+'/jogarMultiplayer')))
    res.render(path.resolve(__dirname+'/jogarMultiplayer/multiplayer.html'))
});
app.get('/login', function (req, res) {
    app.use(express.static(path.resolve(__dirname+'/login')))
    res.render(path.resolve(__dirname+'/login/login.html'))
});
app.get('/cadastrar', function (req, res) {
    if(logado){
        app.use(express.static(path.resolve(__dirname+'/login/cadastrar')))
        res.render(path.resolve(__dirname+'/login/cadastrar/cadastrar.html'))
    }else{
        res.redirect('/login')
    }  
});
app.post('/login', (req, res) => {
    const user = req.body.username
    const pass = req.body.pass
    console.log(user, pass)
    if(user == "admin" && pass == "123"){
        logado = true
        return res.redirect('/cadastrar')
    }else{
        return res.redirect('/login')
    }
});

// app.post('/login', (req, res) => {
//     const email = req.body.email;
//     const senha = req.body.senha;
  
//     if (email == 'Matheus10_silveira@hotmail.com' && senha == '12345') {
//       logado = true;
//       return res.redirect('adicionarHeroi');
//     } else {
//       return res.status(401).send();
//     }
//   });

app.listen(porta, () =>{
    console.log("Servidor rodando na porta: " + porta)
})
