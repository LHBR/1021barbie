import { useState } from "react";
import Filme from "../../filme/Filme"
import './Main.css'
type FilmesType = {
  id: number,
  titulo:string,
  sinopse:string,
  imagem:string
}
export default function Main(){
  //Hook
  const [texto,setTexto] =  useState("Guilherme")

  const filmes:FilmesType[] = [
    {
      id: 1,
    titulo:"Barbie",
    sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de  aparência menos do que perfeita,Barbie parte para o mundo humano em busca da verdadeira felicidade.",
    imagem:"/barbie.png"
    },
    {
      id: 2,
      titulo:"Tranformers",
      sinopse:"Uma nova ameaça capaz  de destruir todo o planeta surge fazendo com que Optimus Prime e osAutobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra.",
      imagem:"/transformers.jpg"
    }
  ]
  function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setTexto(e.target.value)
    }
    return(
        <>
      <div className="pesquisa">
      <p>Buscar Filme</p>
          <input className="barrapesquisa" type="text" onChange={mudaTexto}/>
          <div>
            <p className="texto_digitado">pesquisa: {texto}</p>
          </div>
          
          </div>
          <main className="content_main">
            <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita,
             Barbie parte para o mundo humano em busca da verdadeira felicidade."
             imagem="/barbie.png"
             />
            <Filme titulo="Tranformers" sinopse="Uma nova ameaça capaz 
            de destruir todo o planeta surge fazendo com que Optimus Prime e os
             Autobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra."
             imagem="/transformers.jpg"
             />
              <Filme titulo="Tranformers" sinopse="Uma nova ameaça capaz 
            de destruir todo o planeta surge fazendo com que Optimus Prime e os
             Autobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra."
             imagem="/transformers.jpg"
             />
              <Filme titulo="Tranformers" sinopse="Uma nova ameaça capaz 
            de destruir todo o planeta surge fazendo com que Optimus Prime e os
             Autobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra."
             imagem="/transformers.jpg"
             />
              <Filme titulo="Tranformers" sinopse="Uma nova ameaça capaz 
            de destruir todo o planeta surge fazendo com que Optimus Prime e os
             Autobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra."
             imagem="/transformers.jpg"
             />
              <Filme titulo="Tranformers" sinopse="Uma nova ameaça capaz 
            de destruir todo o planeta surge fazendo com que Optimus Prime e os
             Autobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra."
             imagem="/transformers.jpg"
             />
        </main>
        </>
    )
}