const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const listarProdutos = async (req, res) => {
    return res.status(200).json(produtos);
};

const obterProduto = async (req, res) => {
    const { idProduto } = req.params;

    const produto = produtos.find((produto) => {
        return produto.id === parseInt(idProduto);
    })

    if (!produto) {
        return res.status(404).json({ mensagem: 'O produto não existe.' })
    }

    return res.status(200).json(produto);
};

const calcularFrete = async (req, res) => {
    const { idProduto } = req.params;
    const { cep } = req.params;

    const produto = produtos.find((produto) => {
        return produto.id === parseInt(idProduto);
    })

    if (!produto) {
        return res.status(404).json({ mensagem: 'O produto não existe.' })
    }

    try {
        const estado = await getStateFromZipcode(cep);

        if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
            const frete = produto.valor * 10 / 100;
            const resultado = { produto, estado, frete };
            return res.status(200).json(resultado);
        }

        if (estado === 'SP' || estado === 'RJ') {
            const frete = produto.valor * 15 / 100;
            const resultado = { produto, estado, frete };
            return res.status(200).json(resultado);
        }

        const frete = produto.valor * 12 / 100;
        const resultado = { produto, estado, frete };
        return res.status(200).json(resultado);
    } catch (error) {
        return res.status(500).json(`Deu erro: ${error.message}`);
    }
};

module.exports = {
    listarProdutos,
    obterProduto,
    calcularFrete
}