const mongoose = require('mongoose')

const Livro = mongoose.model('Livro', {
    titulo: String,
    autor: String,
    isbn: String,
    resumo: String,
    ano_lancamento: String
})

module.exports = Livro