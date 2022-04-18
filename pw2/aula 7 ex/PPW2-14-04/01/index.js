const axios = require('axios');
const express = require('express');
const app = express();

const getData = () => {
  axios
    .get('https://akabab.github.io/superhero-api/api/all.json')
    .then((res) => {
      getQueryString(res.data);
    });
};

const getQueryString = (data) => {
  app.use('/', (request, response) => {
    data.map((item) => {
      if (request.query.nome === item.name) {
        response.send(item.work.occupation);
      }
    });
  });
};

app.listen(3000);

getData();
