var readline = require('readline');
var resp = "";
const fs = require('fs');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    leitor.question("Digite alguma coisa: \n", function(answer) {
        var resp = answer;
         fs.writeFile('arquivo.txt', resp, (err) => {
            if (err) throw err;
            console.log('O arquivo foi criado!');
            });
        leitor.close(); 
    });
