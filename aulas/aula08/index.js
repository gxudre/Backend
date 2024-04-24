const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb+srv://gxudre:Xudre123426!@cluster0.vcqxfh9.mongodb.net/';

async function Conectar() {
    try {
        const mongoClient = await MongoClient.connect(url);
        return await mongoClient.db('loja');
    } catch (error) {
        console.log("deu ruim", error);
    }
}

async function inserir(produto) {
    const db = await Conectar();
    return db.collection('produtos').insertOne(produto);
}

async function Listar() {
    const db = await Conectar();
    return db.collection('produtos').find({}).toArray();
}

async function Atualizar(id, produtoAtualizado) {
    const db = await Conectar();
    return db.collection('produtos').updateOne({ _id: new ObjectId(id) }, {$set: produtoAtualizado});
}

async function Remover(id){
    const db = await Conectar();
    return db.collection('produtos').deleteOne({ _id: new ObjectId(id)})
}

async function testar() {
    const result = await inserir({ nome: 'banana', preco: 20.0 });
    console.log("Produto inserido", result);

    const Produtos = await Listar();
    console.log('Listagem de produtos', Produtos);

    const Atual = await Atualizar('662851339d9ec6d9b814de2f', { nome:'Maconha', preco: '18.0'});
    console.log("produto Atualizado", Atual);

    const Removido = await Remover("662851339d9ec6d9b814de2f");
    console.log('Produto removido', Removido);
}

testar();