const convidados = require('../database/database');

const listarConvidados = (req, res) => {
    return res.status(200).json(convidados);
};

const consultarConvidado = (req, res) => {
    const { nome } = req.query;

    if (!nome) {
        return res.status(200).json(convidados);
    }

    const verificarNome = convidados.includes(nome);

    if (!verificarNome) {
        return res.status(400).json({ mensagem: 'O convidado buscado não está presente na lista.' })
    }

    return res.status(200).json({ mensagem: 'Convidado presente.' })
};

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'É obrigatório informar o nome.' });
    }

    if (nome.trim().length === 0) {
        return res.status(400).json({ mensagem: 'Não é permitido nome vazio ou com espaços em branco.' })
    }

    const verificarNome = convidados.includes(nome);

    if (verificarNome) {
        return res.status(400).json({ mensagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.' })
    }

    convidados.push(nome);

    return res.status(201).json({ mensagem: 'Convidado adicionado.' })
};

const deletarConvidado = (req, res) => {
    const { nome } = req.params;

    const verificarNome = convidados.includes(nome);

    if (!verificarNome) {
        return res.status(404).json({ mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.' })
    }

    const indice = convidados.indexOf(nome);

    convidados.splice(indice, 1);

    return res.status(200).json({ mensagem: 'Convidado removido.' });
};

module.exports = {
    listarConvidados,
    consultarConvidado,
    adicionarConvidado,
    deletarConvidado
};