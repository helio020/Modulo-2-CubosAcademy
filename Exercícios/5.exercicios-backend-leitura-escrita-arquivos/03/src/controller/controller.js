const { buscarEndereco } = require('utils-playground');
const fs = require('fs/promises');

const consultarCep = async (req, res) => {
    const { cep } = req.params;

    try {
        const lerArquivo = await fs.readFile('./src/enderecos.json');

        const enderecos = JSON.parse(lerArquivo);


        const encontrarEndereco = enderecos.find((endereco) => {
            return endereco.cep === cep;
        });

        if (encontrarEndereco) {
            return res.status(200).json(encontrarEndereco);
        }

        if (!encontrarEndereco) {
            const endereco = await buscarEndereco(cep);
            enderecos.push(endereco);
            const enderecosStringfy = JSON.stringify(enderecos);
            await fs.writeFile('./src/enderecos.json', enderecosStringfy);
        }

        return res.json('O endereço foi adicionado, consulte novamente.');
    } catch (error) {
        return res.json(`Deu erro: ${error.message}`);
    }
};

module.exports = consultarCep;