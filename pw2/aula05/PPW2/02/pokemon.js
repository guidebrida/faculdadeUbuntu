const readline = require('readline');
const axios = require('axios');
const fs = require('fs');

const bash = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

const dados = () => {
  bash.question('Digite um número: ', function (response) {
    if (response > 0 && response < 695) {
      numeros.push(response);
      dados();
    } else {
      request_pokemon();
    }
  });
};

const request_pokemon = () => {
  let objetos = [];
  numeros.map((numero) => {
    objetos.push(
      axios
        .get(`https://akabab.github.io/superhero-api/api/id/${numero}.json`)
        .then((response) => new Promise((resolve) => resolve(response.data)))
    );
  });

  salvar_dados(objetos);
};

const salvar_dados = (objetos) => {
  Promise.all(objetos).then((response) => {
    fs.writeFile('resultados.json', JSON.stringify(response), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Arquivo salvo!');
      }
    });
  });
};

dados();
