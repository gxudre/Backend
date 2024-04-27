const {Contato, inserir, alterar, deletar, buscar} = require("./modelo");

const adicionarContato = (nome, email, telefone) => {
    const contato = new Contato(nome, email, telefone);
    inserir(contato)
};

const buscarContato = (nome) => {
    const contato = new Contato(nome);
    return buscar();
};

const atualizarContato = (nome, email, telefone) => {
    const contato = buscarContato(nome);
    if (contato){
        contato.nome = nome;
        contato.email = email;
        contato.telefone = telefone;
        alterar(contato);
        console.log('O contato foi alterado com sucesso');
    }else{
        console.log('esse contato não existe');
    };
};

const removerContato = (nome) => {
    const contato = buscarContato(nome);
    if(contato){
        deletar(contato);
        console.log('contato deletado');
    }else{
        console.log('Não existe contato para deletar');
    }
};

module.exports = {adicionarContato, buscarContato, atualizarContato, removerContato};