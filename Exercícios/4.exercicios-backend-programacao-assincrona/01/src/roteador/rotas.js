const express = require('express');
const controlador = require('../controladores/controlador');

const rotas = express();

rotas.get('/produtos', controlador.listarProdutos);
rotas.get('/produtos/:idProduto', controlador.obterProduto);
rotas.get('/produtos/:idProduto/frete/:cep', controlador.calcularFrete);

module.exports = rotas;