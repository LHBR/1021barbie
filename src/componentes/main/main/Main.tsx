import Filme from "../../filme/Filme"
import './Main.css'
export default function Main(){
    return(
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
        </main>
    )
}