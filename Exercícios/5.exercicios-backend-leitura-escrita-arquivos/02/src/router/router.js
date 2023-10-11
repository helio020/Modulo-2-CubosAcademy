const express = require('express');
const controller = require('../controller/controller');

const rotas = express();

rotas.get('/pokemon', controller.obterListaPokemons);
rotas.get('/pokemon/:id', controller.obterPokemon);

module.exports = rotas;