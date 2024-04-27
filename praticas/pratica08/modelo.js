const conectarDb = require('./database');

class Contato {
    constructor(){
        this.id = null
        this.nome = new nome();
        this.email = new email();
        this.telefone = new telefone();
    }
}

const inserir = async (contato) =>{
    const db = await conectarDb();
    const collection = await db.collection('contatos');
    let result = await collection.insertOne({contato.nome, contato.email, contato.telefone});
    contato.id = result.insertedId;
}

const alterar = async (contato) => {
    const db = await conectarDb();
    const collection = await db.collection('contatos');
    collection.updateOne( { _id: contato.id} , { $set: { nome: contato.nome, email: contato.email, telefone: contato.telefone } })
};

const deletar = async (contato) => {
    const db = await conectarDb();
    const collection = await db.collection('contatos');
    collection.deleteOne({nome : contato.nome});
}

const buscar = async (contato) => {
    const db = await conectarDb();
    const collection = await db.collection('contatos');
    let result = collection.findOne({nome: contato.nome});
    contato.id = result._id;
    contato.nome = result.nome;
    contato.email = result.email;
    contato.telefone = result.telefone;
}

module.exports = {Contato, inserir, alterar, deletar, buscar};