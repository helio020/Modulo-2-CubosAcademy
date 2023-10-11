let alunos = require('../database/colecao-alunos');
const cursos = require('../database/colecao-cursos');
let idenficador = 1;

const obterAlunos = (req, res) => {
    return res.status(200).json(alunos);
};

const obterAluno = (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ mensagem: 'O ID deve ser um número válido' })
    }

    const encontrarAluno = alunos.find((aluno) => {
        return aluno.id === id;
    });

    if (!encontrarAluno) {
        return res.status(404).json({ mensagem: 'O aluno não foi encontrado' })
    }

    return res.status(200).json(encontrarAluno);
};

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'Preencha os campos obrigatórios' })
    }

    if (nome.trim().length === 0 || sobrenome.trim().length === 0 || curso.trim().length === 0) {
        return res.status(400).json({ mensagem: 'É inválido valor vazio ou com apenas espaços em branco' })
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'Essa idade não é permitida' })
    }

    const verificarCurso = cursos.includes(curso);

    if (verificarCurso === false) {
        return res.status(404).json({ mensagem: 'O curso informado não existe' })
    }

    const aluno = {
        id: idenficador++,
        nome: nome.trim(),
        sobrenome: sobrenome.trim(),
        idade: parseInt(idade),
        curso: curso.trim()
    }

    alunos.push(aluno);

    return res.status(201).send();
};

const deletarAluno = (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ mensagem: 'O ID deve ser um número válido' })
    }

    const encontrarAluno = alunos.find((aluno) => {
        return aluno.id === id;
    });

    if (!encontrarAluno) {
        return res.status(404).json({ mensagem: 'O aluno não foi encontrado' })
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== id;
    });

    return res.status(200).json(encontrarAluno);
};

const atualizarAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, sobrenome, idade, curso } = req.body;

    if (!id) {
        return res.status(400).json({ mensagem: 'O ID deve ser um número válido' })
    }

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'Preencha os campos obrigatórios' })
    }

    if (nome.trim().length === 0 || sobrenome.trim().length === 0 || curso.trim().length === 0) {
        return res.status(400).json({ mensagem: 'É inválido valor vazio ou com apenas espaços em branco' })
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'Essa idade não é permitida' })
    }

    const verificarCurso = cursos.includes(curso);

    if (verificarCurso === false) {
        return res.status(404).json({ mensagem: 'O curso informado não existe' })
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === id;
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'O aluno não foi encontrado' })
    }

    aluno.nome = nome;
    aluno.sobrenome = sobrenome;
    aluno.idade = idade;
    aluno.curso = curso;

    return res.status(204).send();
};

const atualizarCursoAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const { curso } = req.body;

    if (!id) {
        return res.status(400).json({ mensagem: 'O ID deve ser um número válido' })
    }

    if (!curso) {
        return res.status(400).json({ mensagem: 'O curso deve ser informado' })
    }

    const verificarCurso = cursos.includes(curso);

    if (verificarCurso === false) {
        return res.status(404).json({ mensagem: 'O curso informado não existe' })
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === id;
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'O aluno não foi encontrado' })
    }

    aluno.curso = curso;

    return res.status(204).send();
};

module.exports = {
    obterAlunos,
    obterAluno,
    cadastrarAluno,
    deletarAluno,
    atualizarAluno,
    atualizarCursoAluno
};