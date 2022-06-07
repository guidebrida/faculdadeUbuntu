require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const conexaoDB = require('./config/dbConn');
const PORT = process.env.PORT;

conexaoDB();

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/herois', require('./routes/herois'));

mongoose.connection.once('open', () => {
  console.log('Conectado ao MongoDB com sucesso!');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
