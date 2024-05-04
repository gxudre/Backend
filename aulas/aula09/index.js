require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./modelo');

const url = process.env.MONGODB_URL;

const main = async () => {
    try {
        await mongoose.connect(url);
        console.log('conectado ao banco');
    } catch (error) {
        console.log('deu ruim!', error.message);
    }

    //inserir um produto

    //    const produto = new Produto({
    //     nome: "banana",
    //     preco: 12,
    //     quantidade: 5
    //    });

    //    await produto.save();
    //    console.log(produto);


    //inserir 2 (Try catch pra pegar as validações definidas no modelo.js pra tratamento de dados)

       const produto = await Produto.create({
        nome: 'Uva',
        preco: 32.5,
        quantidade: 10
       });
       try {
        await produto.save();
        console.log(produto);
       } catch (err) {
        for(let key in err.errors){
            console.log(err.errors[key].message)
        }
       }
       

    // inserir N produtos 

    // const produtos = await Produto.insertMany([
    //     {nome: 'maça', preco: 20.7, quantidade: 8},
    //     {nome: 'pera', preco: 12.5, quantidade: 18},
    //     {nome: 'laranja', preco: 26.9, quantidade: 28},
    // ]);
    // console.log(produtos);


    //consultar 1 produto 

    // const produto = await Produto.findOne({nome: 'banana'});
    // console.log(produto);

    //consultar N produtos 

    // const produto = await Produto.find({nome: "banana"});
    // console.log(produto);

    // atualizar 1 produto forma 1

    // const produto = await Produto.findOneAndUpdate({nome:'banana'},{nome: "banana nanica", preco: 15.0, quantidade: 20});
    // console.log(produto);

    // atualizar 1 produto forma 2 (não devolve o find)

    // const result = await Produto.updateOne({nome:'banana'}, {nome: 'banana da terra', preco: 19.0, quantidade: 11});
    // console.log(result);

    //remover 1 produto 

    // const produto = await Produto.findOneAndDelete({nome: 'Uva'});
    // console.log(produto);

    //

    await mongoose.disconnect();
}

main();