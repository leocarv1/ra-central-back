const Lojas = require('../models/Lojas');

module.exports = {
    /**
     * @return todas as lojas
     */
    async index(req, res) {
        const lojas = await Lojas.findAll();

        return res.json(lojas);
    },

    /**
     * @return código das lojas
     */
    async getCod(req, res) {
        const codigo_lojas = await Lojas.findAll({
            attributes: ['codigo'],
        })

        return res.json(codigo_lojas)
    },

    /**
     * @return lojas especialistas
     */
    async getLojasEspecialistas(req, res) {
        const lojasEspecialistas = await Lojas.findAll({
            where: {
                especialista: 1
            }
        })

        return res.json(lojasEspecialistas)
    },

    /**
     * @return lojas varejo online
     */
    async getLojasVarejoOnline(req, res) {
        const lojasVarejoOnline = await Lojas.findAll({
            where: {
                varejo_online: 1
            }
        })

        return res.json(lojasVarejoOnline);
    },

    /**
     * @return lojas varejo online
     */
    async getLojasVarejoOnlineEspecialista(req, res) {
        const lojasVarejoOnlineEspecialista = await Lojas.findAll({
            where: {
                varejo_online: 1,
                especialista: 1
            }
        })

        return res.json(lojasVarejoOnlineEspecialista);
    },

    async getDados(req, res) {
        const { loja_codigo } = req.params; 

        const loja = await Lojas.findOne({ 
            where: { 
                codigo: loja_codigo
            } 
        });

        return res.json(loja);
    },

    /**
     * @param {*} req nome, codigo, especialista e varejo online do body
     * 
     * @return {*} res msg
     */
    async store(req, res) {
        const { nome, codigo, especialista, varejo_online } = req.body;

        const loja = await Lojas.findOne({ 
            where: { 
                codigo: codigo
            } 
        });

        if (!loja) {
            await Lojas.create({ nome, codigo, especialista, varejo_online});
        } else {
            return res.json({
                mensagem: "Loja já existe!"
            });
        }

        return res.json({
            mensagem: "Loja adicionada com sucesso!"
        });
    },

    /**
     * 
     * @param {*} req dados da loja
     * @param {*} res loja atualizada
     */
    async update(req, res) {
        try {
            const { loja_codigo } = req.params;
            const { especialista, varejo_online } = req.body;
    
            // Procurar a loja no banco de dados
            const loja = await Lojas.findOne({
                where: {
                    codigo: loja_codigo
                }
            });
    
            // Se a loja não existir, retornar uma mensagem de erro
            if (!loja) {
                return res.status(400).json({ mensagem: "Loja não encontrada" });
            }
    
            // Atualizar os campos desejados
            // loja.nome = nome || loja.nome;
            // loja.codigo = codigo || loja.codigo;
            loja.especialista = especialista;
            loja.varejo_online = varejo_online;
    
            // Salvar as alterações no banco de dados
            await loja.save();
    
            // Retornar a loja atualizada
            return res.json({ mensagem: "Loja atualizada com sucesso", loja });
        } catch (error) {
            // Em caso de erro, retornar uma mensagem de erro genérica
            console.error(error);
            return res.status(500).json({ mensagem: "Erro ao atualizar a loja" });
        }
    },

    /**
     * @params codigo da loja
     * 
     * @return msg de sucesso
     */
    async delete(req, res) {
        const { loja_codigo } = req.params;

        const loja = await Lojas.findOne({ 
            where: { 
                codigo: loja_codigo 
            } 
        });

        if (!loja) {
            return res.status(400).json({mensagem: "Loja não encontrada"});
        }

        await loja.destroy();

        return res.json({mensagem: "Loja excluída com sucesso"});
    }
}