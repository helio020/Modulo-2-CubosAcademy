const express = require('express');
const rotas = require('./router/roteador')
const validarSenha = require('./middleware/intermediarios');

const app = express();

app.use(express.json());
app.use(validarSenha);
app.use(rotas);

app.listen(3000);