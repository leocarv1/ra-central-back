require('dotenv').config()

module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        //nome das tabelas e colunas no formato snake case
        underscored: true,
    }
}