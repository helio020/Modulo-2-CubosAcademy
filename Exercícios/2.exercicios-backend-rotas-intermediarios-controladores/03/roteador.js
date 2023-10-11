const { get, getPorId } = require('./controladores/imoveis');
const express = require('express');

const rotas = express();

rotas.get('/imoveis', get);
rotas.get('/imoveis/:id', getPorId);

module.exports = rotas;