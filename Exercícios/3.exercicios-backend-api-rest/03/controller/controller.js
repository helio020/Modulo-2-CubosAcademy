let livros = require('../database/livros');
let id = 3;

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
};

const obterLivro = (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' })
    }

    const encontrarLivro = livros.find((livro) => {
        return livro.id === id;
    });

    if (!encontrarLivro) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.' })
    }

    return res.status(200).json(encontrarLivro);
};

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' })
    }

    const livro = {
        id: id++,
        titulo,
        autor,
        ano: parseInt(ano),
        numPaginas: parseInt(numPaginas)
    }

    livros.push(livro);

    return res.status(201).json(livro);
};

const substituirLivro = (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' })
    }

    const livro = livros.find((livro) => {
        return livro.id === id;
    });

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser substituído para o ID informado.' })
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = parseInt(ano);
    livro.numPaginas = parseInt(numPaginas);

    return res.status(200).json({ mensagem: 'Livro substituído.' });
};

const alterarLivro = (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, autor, ano, numPaginas } = req.body;

    const livro = livros.find((livro) => {
        return livro.id === id;
    });

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser alterado para o ID informado.' })
    }

    if (titulo) {
        livro.titulo = titulo;
    }

    if (autor) {
        livro.autor = autor;
    }

    if (ano) {
        livro.ano = parseInt(ano);
    }

    if (numPaginas) {
        livro.numPaginas = parseInt(numPaginas);
    }

    return res.status(200).json({ mensagem: 'Livro alterado.' });
};

const removerLivro = (req, res) => {
    const id = parseInt(req.params.id);

    const livro = livros.find((livro) => {
        return livro.id === id;
    });

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser removido para o ID informado.' })
    }

    const removerLivro = livros.filter((livro) => {
        return livro.id !== id;
    });

    livros = removerLivro;

    return res.status(200).json({ mensagem: 'Livro removido.' });
};

module.exports = {
    listarLivros,
    obterLivro,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    removerLivro
};