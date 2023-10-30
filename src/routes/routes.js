const express = require('express')

const LojasController = require('../controllers/LojasController')

const routes = express.Router();

routes.get('/lojas', LojasController.index);
routes.get('/lojas-codigo', LojasController.getCod);
routes.get('/lojas-especialistas', LojasController.getLojasEspecialistas);
routes.post('/lojas', LojasController.store);
routes.delete('/lojas/:loja_codigo', LojasController.delete);

module.exports = routes