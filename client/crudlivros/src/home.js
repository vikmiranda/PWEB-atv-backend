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
        Axios.get("localhost:3000/livros", {
            
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <main className="container">
            <h2>Título do Livro</h2>
            <form action="">
              

                <div className="input-field">
                    <p>Esse é o título do livro: </p>
                    <div className="underline"></div>
                </div>

                <div className="input-field">
                    <p>Esse é o autor do livro: </p>
                    <div className="underline"></div>
                </div>

                <div className="input-field">
                    <p>Esse é o ISBN do livro: </p>
                    <div className="underline"></div>
                </div> 

                <div className="input-field">
                    <p>Esse é o resumo do livro:</p>
                    <div className="underline"></div>
                </div>

                <div className="input-field">
                    <p>Esse é o ano de Lançamento do livro: </p>
                    <div className="underline"></div>
                </div>

            </form>

    </main>
     
 
    );
  }

  
  export default App2;