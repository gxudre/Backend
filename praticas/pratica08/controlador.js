const {Contato, inserir, alterar, deletar, buscar} = require("./modelo");

const adicionarContato = async (nome, email, telefone) => {
    const contato = new Contato(nome, email, telefone);
    const {id} = await inserir(contato);
    contato.id = id;
    return { ...contato};
};

const buscarContato = async (nome) => {
    const contato = new Contato(nome);
    const {id, email, telefone} = await buscar(contato);
    contato.id = id;
    contato.email = email;
    contato.telefone = telefone;
    return {...contato};
};

const atualizarContato = async (nome, email, telefone) => {
    const contato = await buscarContato(nome);
    if (contato){
        contato.email = email;
        contato.telefone = telefone;
        await alterar(contato);
        console.log('O contato foi alterado com sucesso');
        
    }else{
        console.log('esse contato não existe');
    };

    return {...contato};
};

const removerContato = async (nome) => {
    const contato = await buscarContato(nome);
    if(contato){
        await deletar(contato);
        console.log('contato deletado');
    }else{
        console.log('Não existe contato para deletar');
    }
    return{...contato};
};

module.exports = {adicionarContato, buscarContato, atualizarContato, removerContato};