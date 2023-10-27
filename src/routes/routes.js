const express = require('express')

const LojasController = require('../controllers/LojasController')

const routes = express.Router();

routes.get('/lojas', LojasController.index);
routes.get('/lojas-codigo', LojasController.getCod);
routes.post('/lojas', LojasController.store);
routes.delete('/lojas/:loja_id', LojasController.delete);

module.exports = routes