var express = require('express');
var app = express();

app.get('/imagens/yoda', function (req, res) {
  res.download('./img/yoda.jpg');
});

app.listen(3003, function () {
  console.log('Aplicação exemplo escutando na porta 3000!');
});
