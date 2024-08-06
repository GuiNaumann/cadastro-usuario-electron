const Aluno = require('../models/aluno');

exports.getAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.findAll();
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createAluno = async (req, res) => {
    try {
        const { nome, telefone } = req.body;
        const novoAluno = await Aluno.create({ nome, telefone });
        res.status(201).json(novoAluno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
