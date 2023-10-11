const express = require('express');
const recurso_alunos = require('../controller/recurso-alunos');

const rotas = express();

rotas.get('/alunos', recurso_alunos.obterAlunos);
rotas.get('/alunos/:id', recurso_alunos.obterAluno);
rotas.post('/alunos', recurso_alunos.cadastrarAluno);
rotas.delete('/alunos/:id', recurso_alunos.deletarAluno);
rotas.put('/alunos/:id', recurso_alunos.atualizarAluno);
rotas.patch('/alunos/:id/curso', recurso_alunos.atualizarCursoAluno);

module.exports = rotas;