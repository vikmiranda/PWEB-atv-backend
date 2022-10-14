const router = require('express').Router()
const Livro = require('../models/Livro')

//Adicionar Livro
router.post('/', async (req, res) => {
  
    //req.body
    const {titulo, autor, isbn, resumo, ano_lancamento} = req.body
    
    //validar se campos estao preenchidos
    if (!titulo){
      res.status(422).json({error: 'O titulo do livro é obrigatório!'})
      return
    }
  
    const livro ={
      titulo,
      autor,
      isbn,
      resumo,
      ano_lancamento
    }
  
    try {
  
      await Livro.create(livro)
      res.status(201).json({message: `Livro: ${livro.titulo} foi inserido com sucesso!`})
  
    } catch (error) {
      res.status(500).json({error: error})
    }
  })


//Consultar livro
router.get('/', async (req, res) => {

    try {
        
        const livro = await Livro.find()
        res.status(200).json(livro)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

//Consultar Livro por ID
router.get('/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        
        const livro = await Livro.findOne({_id: id}) //mudar para titulo se necessario
        
        if(!livro){
            res.status(404).json({message: 'O livro não foi encontrado'})
        }
        
        res.status(200).json(livro)

    } catch (error) {
        res.status(500).json({error: error})
    }
})


//UPDATE livro
router.put('/:id', async (req, res) => {
    const id = req.params.id
    //req.body
    const {titulo, autor, isbn, resumo, ano_lancamento} = req.body
    
    const livro ={
        titulo,
        autor,
        isbn,
        resumo,
        ano_lancamento
      }
    
      try {
            const livroAtualizado = await Livro.updateOne({_id: id}, livro)
            
            //checar se alguma informacao foi atualizada
            if(livroAtualizado.matchedCount === 0){
                res.status(404).json({message: 'O livro não foi encontrado'})
                return
            }

            res.status(200).json({livro})
        
      } catch (error) {
         res.status(500).json({error: error})
      }

})


//Excluir um livro
router.delete('/:id', async (req, res) => {
    const id = req.params.id
   
    //verifica se o livro existe
    const livro = await Livro.findOne({_id: id}) //mudar para titulo se necessario
        
    if(!livro){
        res.status(404).json({message: 'O livro não existe'})
        return
    } //


    try {
        
        await Livro.deleteOne({id: id})
        res.status(200).json({message: 'O livro foi deletado!'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router
