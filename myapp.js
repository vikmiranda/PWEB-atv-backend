const express = require('express')
//const dados = require('./node_fake_db.js')
//const addLivro = require('./node_fake_db.js')
const app = express()
const port = process.env.PORT || 3000
const fakedb = require('./node_fake_db');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json())

app.get("/livros", (req, res) => {
  res.json(fakedb.livros)
})


app.get("/livros/:id", (req, res) => {
  const { id } = req.params;
  res.json(fakedb.findById(id))
})

app.post("/livros", (req, res) => {
  fakedb.addLivro(req.body);
  const { titulo } = req.body;
  res.send('livro ' + titulo +' adicionado')
})


app.put((req, res) => {
  res.send('Update method ')
})
app.delete("/livros/:id", (req, res) => {
  const { id } = req.params;
  fakedb.del(id);
  res.send('livro removido');
})




