const Usuario = require('../models/model_users');

const criar = async (req,res) => {
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json({id: novoUsuario._id.toString(), email: novoUsuario.email})
};

const entrar = async (req,res) => {
    const usuarioEncontrado = await Usuario.findOne({email: req.body.email});
    if(usuarioEncontrado){
        if(usuarioEncontrado.senha === req.body.senha){
            res.json({token: '1234567890'});
        }else{
            res.status(401).json({msg: 'acesso negado!'});
        }
    }else{
        res.status(400).json({msg: 'credenciais inválidas!'});
    };
};

module.exports = {criar, entrar};