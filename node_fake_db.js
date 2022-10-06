
const livros = [
    {
      id: 1,  
      titulo: 'Livro do desassossego',
      autor: 'Fernando Pessoa',
      isbn: 8535908498,
      resumo: 'O narrador principal (mas não exclusivo) das centenas de fragmentos que compõem este livro é o "semi-heterônimo" Bernardo Soares. Ajudante de guarda-livros na cidade de Lisboa...',
      ano_lancamento: 2006
    },
    {
        id: 2,  
        titulo: 'A Arte da Guerra',
        autor: ' Sun Tzu',
        isbn: 6556600490,
        resumo: 'Escrito há mais de 2.500 anos, o texto ultrapassa seu contexto militar e apresenta lições fundamentais para o crescimento interior e profissional...',
        ano_lancamento: 2001
    },
    {
        id: 3,  
        titulo: 'XXXX',
        autor: 'José',
        isbn: 56746,
        resumo: 'YYY',
        ano_lancamento: 2022
    },
    {
        id: 4,  
        titulo: 'XXXX',
        autor: 'Maria',
        isbn: 121212,
        resumo: 'YYY',
        ano_lancamento: 2000
    }
  ]

module.exports = {
    livros,
     findById(id){
        return livros[id-1]
    },
    addLivro(livro){
        livro.id = livros.length+1
        livros.push(livro)
    },
    findAll(){
        return livros
    },

    del(id){
        for(var i = 0; i < livros.length; i++) {
            if(livros[i].id===  id){
                livro = livros[i]
                livros.pop(livro)
              break;
            }
    }               
    }


}

   



function existsBy(id){
    for(var i = 0; i < livros.length; i++) {
        if(livros[i].id===  id){
            return True
        }
        else{
            return False
        }
} 
    
}