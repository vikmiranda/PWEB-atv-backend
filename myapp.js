const express = require('express')
const app = express()
const port = 3000

app.route('/')
  .get((req, res) => {
    res.send('Get')
  })
  .post((req, res) => {
    res.send('POST ')
  })
  .put((req, res) => {
    res.send('Update ')
  })
  .delete((req, res) => {
    res.send('Delete ')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})