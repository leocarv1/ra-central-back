const { Model, DataTypes } = require('sequelize')

class Loja extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            codigo: DataTypes.INTEGER,
            especialista: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }
}

module.exports = Loja