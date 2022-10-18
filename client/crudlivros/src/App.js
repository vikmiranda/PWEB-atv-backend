import './App.css';
import React, { useState } from 'react';
import Axios from "axios";

function App() {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) =>({
            ...prevValue,
            [value.target.name]: value.target.value,

        }));
        console.log(values)
    };

    const handleClickButton = () =>{
        Axios.post("localhost:3000/cadastrar-livro", {
            titulo: values.titulo,
            autor:  values.autor,
            isbn:   values.isbn,
            resumo: values.resumo,
            ano_lancamento: values.ano_lancamento,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <main className="container">
            <h2>Cadastrar Livro</h2>
            <form action="">
                <div className="input-field">
                    <input type="text" name="titulo" id="username" 
                        placeholder="Título do Livro" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div>

                <div className="input-field">
                    <input type="text" name="autor" id="password"
                        placeholder="Autor do Livro" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div>

                <div className="input-field">
                    <input type="text" name="isbn" id=""
                        placeholder="Isbn" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div> 

                <div className="input-field">
                    <input type="text" name="resumo" id=""
                        placeholder="Resumo" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div>

                <div className="input-field">
                    <input type="text" name="ano_lancamento" id=""
                        placeholder="Ano de Lançamento" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div>


                <button  onClick={() => handleClickButton()} > Cadastrar</button>
            </form>

    </main>
     
 
    );
  }

  
  export default App;