const { Router } = require('express');
const consultarCep = require('../controller/controller');

const router = Router();

router.get('/enderecos/:cep', consultarCep);

module.exports = router;