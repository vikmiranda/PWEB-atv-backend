import React from "react"

export default function Card(props){
    return (
        <main className="container">
        <h2>TELA EM CARD.JS</h2>
        <form action="">
          

            <div className="input-field">
                <p> {props.titutlo} </p>
                <div className="underline"></div>
            </div>

            <div className="input-field">
                <p>{props.titutlo}aqui </p>
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



    )
    
}