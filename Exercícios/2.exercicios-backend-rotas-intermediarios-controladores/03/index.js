const rotas = require('./roteador');
const express = require('express');

const app = express();

app.use(rotas);

app.listen(8000);
