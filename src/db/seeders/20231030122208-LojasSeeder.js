'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
	
	// Povoando o banco de dados
	await queryInterface.bulkInsert('lojas', [
	{
		nome: 'CentralAr.com',
		codigo: 11128,
		especialista: 1
	},
	{
		nome: 'A. Dias',
		codigo: 11399,
		especialista: 1
	},
	{
		nome: 'Frigelar',
		codigo: 24125,
		especialista: 1
	},
	{
		nome: 'Frio peças',
		codigo: 7016,
		especialista: 1
	},
	{
		nome: 'Leveros',
		codigo: 15106,
		especialista: 1
	},
	{
		nome: 'PoloAr',
		codigo: 10620,
		especialista: 1
	},
	{
		nome: 'DuFrio',
		codigo: 45442,
		especialista: 1
	},
	{
		nome: 'STR',
		codigo: 15937,
		especialista: 1
	},
	{
		nome: 'Web Continental',
		codigo: 12163,
		especialista: 1
	},
	{
		nome: 'Clima rio',
		codigo: 12017,
		especialista: 1
	},
	{
		nome: 'Amazon',
		codigo: 7936,
		especialista: 0
	},
	{
		nome: 'Americanas.com - Loja Online',
		codigo: 6446,
		especialista: 0
	},
	{
		nome: 'Americanas Marketplace',
		codigo: 97826,
		especialista: 0
	},
	{
		nome: 'Carrefour - Loja On Line',
		codigo: 18543,
		especialista: 0
	},
	{
		nome: 'Casas Bahia - Loja Online',
		codigo: 11871,
		especialista: 0
	},
	{
		nome: 'Casas Bahia - Marketplace',
		codigo: 98555,
		especialista: 0
	},
	{
		nome: 'Extra.com.br',
		codigo: 8789,
		especialista: 0
	},
	{
		nome: 'Extra.com.br - Marketplace',
		codigo: 98553,
		especialista: 0
	},
	{
		nome: 'Magazine Luiza - Loja Online',
		codigo: 29266,
		especialista: 0
	},
	{
		nome: 'Mercado Livre',
		codigo: 928,
		especialista: 0
	},
	{
		nome: 'Ponto Frio - Loja Online',
		codigo: 14089,
		especialista: 0
	},
	{
		nome: 'Ponto Frio - Marketplace',
		codigo: 98556,
		especialista: 0
	},
	{
		nome: 'Ricardo Eletro - Loja Online',
		codigo: 10708,
		especialista: 0
	},
	{
		nome: 'Shoptime',
		codigo: 1634,
		especialista: 0
	},
	{
		nome: 'Shoptime Marketplace',
		codigo: 97828,
		especialista: 0
	},
	{
		nome: 'Submarino',
		codigo: 647,
		especialista: 0
	},
	{
		nome: 'Submarino Marketplace',
		codigo: 97827,
		especialista: 0
	},
	{
		nome: 'WalMart - Loja Online',
		codigo: 11018,
		especialista: 0
	},
	{
		nome: 'WalMart - Marketplace',
		codigo: 100761,
		especialista: 0
	},
	{
		nome: 'Zoom.com.br',
		codigo: 37125,
		especialista: 0
	},

], {});
  
},

async down (queryInterface, Sequelize) {  
   await queryInterface.bulkDelete('lojas', null, {});
}
};
