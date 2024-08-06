const axios = require('axios');

document.getElementById('cadastro-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    try {
        await axios.post('http://localhost:8080/ProgramacaoWeb2021/aluno', { nome, telefone });
        alert('Aluno cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar aluno:', error);
        alert('Erro ao cadastrar aluno.');
    }
});

async function fetchAlunos() {
    try {
        const response = await axios.get('http://localhost:8080/ProgramacaoWeb2021/aluno');
        const alunos = response.data;
        const alunoList = document.getElementById('aluno-list');
        alunoList.innerHTML = '';
        alunos.forEach(aluno => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${aluno.idaluno}, Nome: ${aluno.nome}, Telefone: ${aluno.telefone}`;
            alunoList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro ao buscar alunos:', error);
    }
}

fetchAlunos();
