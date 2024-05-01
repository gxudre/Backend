const conectarDb = require('./database');

class Contato {
    constructor(nome, email, telefone){
        this.id = null
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

const inserir = async (contato) => {
    const {nome, email, telefone} = contato;
    const db = await conectarDb();
    const collection = db.collection('contatos');
    const {insertedId} = await collection.insertOne({nome, email, telefone});
    return insertedId;
}

const alterar = async (contato) => {
    const {id, nome, email, telefone} = contato;
    const db = await conectarDb();
    const collection = db.collection('contatos');
    await collection.updateOne( { _id: id} , { $set: {nome,  email, telefone } })
};

const deletar = async (contato) => {
    const {id} = contato;
    const db = await conectarDb();
    const collection = db.collection('contatos');
    await collection.deleteOne({ _id: id});
}

const buscar = async (contato) => {
    const {nome} = contato;
    const db = await conectarDb();
    const collection = db.collection('contatos');
    let {_id, email, telefone} = await collection.findOne({nome});
    return {id: _id, email, telefone};
}

module.exports = {Contato, inserir, alterar, deletar, buscar};