const mongoose = require('mongoose')

const Livro = mongoose.model('Livro', {
    titulo: String,
    autor: String,
    isbn: Number,
    resumo: String,
    ano_lancamento: Number
})

module.exports = Livro