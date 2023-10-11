const express = require('express');
const { proximo, remover, adicionar } = require('./controladores/controlador');

const app = express();

app.get('/', proximo);
app.get('/remover', remover);
app.get('/adicionar', adicionar);

app.listen(8000);