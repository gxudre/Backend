
const mongoose = require('mongoose');
const Produto = require('../models/model_produtos');

const validarDados = async (req, res, next) => {
    const produto = new Produto(req.body);
    try {
        await produto.validate();
        next();
    } catch (err) {
        res.status(422).json({ msg: 'Dados do produto invalidos' });
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

const buscarPeloId = async (req, res, next) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        const produto = await Produto.findOne({ _id: id });
        if (produto) {
            next();
        } else {
            res.status(404).json({ msg: 'Produto não encontrado!' })
        }
    } catch (error) {
        res.status(400).json({ msg: 'id inválido!' });
    }

}

const obter = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findOne({ _id: id });
    res.json(produto);
};

const atualizar = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findByIdAndUpdate({_id: id}, req.body);
    res.json(produto);
};

const remover = async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    await Produto.findByIdAndDelete({_id: id});
    res.status(204).end();
};

module.exports = { validarDados, criar, obterTodos, obter, buscarPeloId, atualizar, remover };