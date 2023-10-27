'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('lojas', { 
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			codigo: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			especialista: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull:false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull:false
			}
		});
	},
	
	async down (queryInterface, Sequelize) {
		
		await queryInterface.dropTable('lojas');
	}
};
