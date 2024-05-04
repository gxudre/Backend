const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: { type: String, trim: true, uppercase: true, required: [true, 'Nome é Obrigatório!'], minlength:[ 3, 'Nome deve conter pelo menos 3 caracteres.'] },
    preco: {Number, min: [0, 'O valor mínimo permitido é zero.']},
    quantidade: {type: Number, default: 0},
});

module.exports = mongoose.model('Produto', produtoSchema);