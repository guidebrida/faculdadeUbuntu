var express = require('express');
var app = express();
var porta = 3434;
app.get('/', function(req, res){
    res.send('Olá mundo!');
});
app.listen(porta, function(){
    console.log('servidor esta ON na porta:' + porta)
})