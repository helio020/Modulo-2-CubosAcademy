const express = require('express');
const controller = require('../controller/controller')

const router = express();

// router.get('/convidados', controller.listarConvidados);
router.get('/convidados', controller.consultarConvidado);
router.post('/convidados', controller.adicionarConvidado);
router.delete('/convidados/:nome', controller.deletarConvidado);

module.exports = router;