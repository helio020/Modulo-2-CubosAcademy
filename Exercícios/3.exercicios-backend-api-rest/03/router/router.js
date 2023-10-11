const express = require('express');
const controller = require('../controller/controller');

const router = express();

router.get('/livros', controller.listarLivros);
router.get('/livros/:id', controller.obterLivro);
router.post('/livros', controller.adicionarLivro);
router.put('/livros/:id', controller.substituirLivro);
router.patch('/livros/:id', controller.alterarLivro);
router.delete('/livros/:id', controller.removerLivro);

module.exports = router;