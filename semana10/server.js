require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const conexaoDB = require('./config/dbConn');
const PORT = process.env.PORT;

conexaoDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/album', require('./routes/albuns'));

mongoose.connection.once('open', () => {
  console.log('Conectado ao MongoDB com sucesso!');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
