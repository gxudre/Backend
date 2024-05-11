const Produto = require('../models/model_produtos');

const validarDados = async  (req, res, next) =>{
    const produto = new Produto(req.body);
    try {
        await produto.validate();
        next();    
    } catch (err) {
        res.status(422).json({msg: 'Dados do produto invalidos'});
    };
    
};

const criar = async (req, res) => {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
};

const obterTodos = async (req, res) => {
    const produtos = await Produto.find({});
    res.json(produtos);
};

module.exports = {validarDados, criar, obterTodos};