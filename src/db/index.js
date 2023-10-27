const Sequelize = require('sequelize');
const dbConfig = require('../config/dbconfig');

const Loja = require('../models/Lojas');

const connect = new Sequelize(dbConfig);

Loja.init(connect)

module.exports = connect
