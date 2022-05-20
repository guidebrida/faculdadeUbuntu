const express = require('express');
const bp = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.listen(process.env.port || PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

require('./api/routes/pessoa')(app);
