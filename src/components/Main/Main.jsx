import { useState, useEffect } from 'react' //guarda coisas, guarda os estados e atualizações//
import axios from "axios"  //faz requisições para api,biblioteca//
import "./Main.css"


function Main() {

const [info, setInfo] = useState([]);

const pegarDados = async() => {

   const dados = await axios.get('https://fakestoreapi.com/products')
  setInfo (dados.data);
  console.log (dados.data)


};

useEffect (() => {
  //quantas vezes ele roda, necessário sempre colocar o [] se não vira loop
  pegarDados();
  }, []);

  //Filter
  // ==== (se refere a algo extremamente igual)

  const filtrarProdutos = info.filter ((item)=> item.category === "electronics" )

// {funcionalidade} (parametro)
return (
    <main>
   {filtrarProdutos.map ((item) => (
    <article key = {item.id}>  
    <img src= {item.image} alt={item.title}/>
    <h2> {item.title} </h2>
    <p> R$ {item.price} </p>

    </article>
))}

    {info.map ((item) => (
    <article key = {item.id}>  
    <img src= {item.image} alt={item.title}/>
    <h2> {item.title} </h2>
    <p> R$ {item.price} </p>
    </article>
    ))}
 </main>
)}


export default Main;

//para o arquivo funcionar precisamos instalar o axios e o usestate+useeffect//
//async pede - await aguarda//
// key (item.id) é a identificação unica para os iten
//// info.map = percorre a lista de produtos.