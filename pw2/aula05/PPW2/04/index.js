// Utilização do pacote Axios para fazer requisições. Nesse exemplo, o axios faz a requisição na API Affirmations e a API retorna uma frase aleatória motivacional.
const axios = require('axios');

const request = () => {
  axios.get('https://www.affirmations.dev/').then((res) => {
    console.log(res.data);
  });
};

request();
