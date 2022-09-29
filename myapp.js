const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var dados = require("./node_fake_db.js")
app.route('/')
  .get((req, res) => {
    //res.json({ nome: 'Flavio', sobrenome: 'aurelio' })
    console.log(dados)
  })
  .post((req, res) => {
    res.send('POST ')
  })
  .put((req, res) => {
    res.send('Update method ')
  })
  .delete((req, res) => {
    res.send('Delete ')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
