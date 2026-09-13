import React from 'react'
import "./global.css"
import { useState, useEffect } from 'react' //guarda coisas, guarda os estados e atualizações//
import axios from "axios"  //faz requisições para api,biblioteca//

function App() {

const [info, setInfo] = useState([])

const pegarDados = async() => {

   const dados = await axios.get('https://fakestoreapi.com/products')
  setInfo (dados.data)


};

useEffect (() => {
  //quantas vezes ele roda, necessário sempre colocar o [] se não vira loop
  pegarDados();
  }, []);


// {funcionalidade} (parametro)
return (
    <main>
    <h1> Bookly </h1>

    {
    info.map ((item)=>(
    <article key={item.id}>
    <img src= {item.image} alt={item.title}/>
    <h2> </h2>
    <p> R$ {item.price} </p>

    </article>
))
}
    </main>
)
}
export default App

//para o arquivo funcionar precisamos instalar o axios e o usestate+useeffect//
//async pede - await aguarda//