const { jogadores } = require('../bancodedados');

const array = jogadores;
let i = 0;

const proximo = (req, res) => {
    res.send(`É a vez de ${array[i]} jogar`);
    i++;
    if (i >= jogadores.length) {
        i = 0;
    }
};

const remover = (req, res) => {
    const { indice } = req.query;
    if (indice >= 0 && indice < array.length) {
        array.splice(indice, 1);
        res.send(`${array}`);
    } else {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    }
};

const adicionar = (req, res) => {
    const { nome, indice } = req.query;

    let primeiraLetraMaiscula = nome.slice(0, 1).toUpperCase();
    let restanteDoNomeMinusculo = nome.slice(1, nome.length).toLowerCase();
    let nomeTratado = primeiraLetraMaiscula + restanteDoNomeMinusculo;

    if (!indice) {
        array.push(nomeTratado);
        res.send(`${array}`);

    } else if (indice >= 0 && indice < array.length) {
        array.splice(indice, 0, nomeTratado);
        res.send(`${array}`);

    } else {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`);
    }
};

module.exports = {
    proximo,
    remover,
    adicionar
};