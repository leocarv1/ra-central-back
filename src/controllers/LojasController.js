const Lojas = require('../models/Lojas');

module.exports = {
    async index(req, res) {
        const lojas = await Lojas.findAll();

        return res.json(lojas);
    },

    async getCod(req, res) {
        const codigo_lojas = await Lojas.findAll({
            attributes: ['codigo'],
        })

        return res.json(codigo_lojas)
    },

    async store(req, res) {
        const { nome, codigo, especialista } = req.body;

        await Lojas.create({ nome, codigo, especialista});

        return res.json({
            mensagem: "Loja adicionada com sucesso!"
        });
    },

    async delete(req, res) {
        const { loja_id } = req.params;

        const loja = await Lojas.findByPk(loja_id);

        if (!loja) {
            return res.status(400).json({mensagem: "Loja não encontrada"});
        }

        await loja.destroy();

        return res.json({mensagem: "Loja excluída com sucesso"});
    }
}