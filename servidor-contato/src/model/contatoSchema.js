
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContatoSchema = new Schema({
    _id:{

        type: mongoose.Schema.Types.ObjectId, // Tipo dos dados
        auto: true, //É autogerado
        required: true,// É obrigatório
    },

    nome:{
        type: String,
        required: true,
    },

    celular: {
        type: String,
        required: true,
    },

    fotoPerfil:{
        
    }
})

const ContatosCollection = mongoose.model('contato', ContatoSchema)

module.exports = ContatosCollection
