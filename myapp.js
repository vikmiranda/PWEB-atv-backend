const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000


app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

//Rotas da API
const LivrosRouter = require('./routes/LivrosRoutes')
app.use('/livros', LivrosRouter)


//conexão com banco mongodb
const DB_USER = 'apipweb'
const DB_PASSWORD = encodeURIComponent('lcO74Q0V2lhRpsEP')

mongoose
.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-pweb.yrrt4wi.mongodb.net/?retryWrites=true&w=majority`).then(() => {
  console.log('Conectamos ao MongoDB')
  app.listen(port)
})
.catch((err) => console.log(err))






