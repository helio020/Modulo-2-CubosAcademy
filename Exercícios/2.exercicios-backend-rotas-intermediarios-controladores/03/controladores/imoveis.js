const imoveis = require('../dados/imoveis');

const get = (req, res) => {
    res.send(imoveis);
};

const getPorId = (req, res) => {
    const { id } = req.params;

    const imovelEncontrado = imoveis.find((imovel) => {
        return imovel.id === parseInt(id);
    });

    res.send(imovelEncontrado);
};

module.exports = {
    get,
    getPorId
};