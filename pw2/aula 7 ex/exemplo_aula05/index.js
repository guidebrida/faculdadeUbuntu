const express = require('express')
const app = express()
const PORTA = 8080

//Uso de middlewares para fazer análise do corpo da mensagem
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// retornar rota com arquivos estáticos
app.use('/estatico', express.static('./public'))

app.use(function(req, res, next){
    console.log(req.ip + "fez uma requisicao")
    next()
})

app.use('/autenticar', function(req, res){
    console.log(req.body)
    res.send(" Olá "+ req.body.usuario + ", seu formulário foi enviado com sucesso")
})

app.use('/info', function(req, res){
    res.send("Isto é um serviço express")
})

app.use('/google', function(req, res){
    res.redirect(307, 'https://google.com')
})

app.use('/hora', function(req, res){
    res.send(JSON.stringify(Date.now()))
})

app.use('/', function(requisicao, resposta){
    console.log(requisicao.query)
    if(requisicao.query.nome == "ramon"){
        resposta.send("Você é o ramon")
    } else {
        resposta.send("Você enviou as seguintes query strings: " + JSON.stringify(requisicao.query))
    }
})

app.listen(PORTA, function(){
    console.log("Serviço está escutando na porta " + PORTA)   
})