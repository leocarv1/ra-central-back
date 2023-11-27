const express = require('express')
const middleware = require('../middleware/middleware.js')

const LojasController = require('../controllers/LojasController')

const routes = express.Router();

routes.get('/lojas', middleware.logger, LojasController.index);
routes.get('/lojas-codigo', LojasController.getCod);
routes.get('/lojas/especialistas', LojasController.getLojasEspecialistas);
routes.get('/lojas/varejo-online', LojasController.getLojasVarejoOnline);
routes.get('/lojas-dados/:loja_codigo', LojasController.getDados);
routes.get('/lojas/varejo-online/especialista', LojasController.getLojasVarejoOnlineEspecialista);

routes.post('/lojas', LojasController.store);

routes.put('/lojas-update/:loja_codigo', LojasController.update);

routes.delete('/lojas/:loja_codigo', LojasController.delete);

module.exports = routes