import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import { useState } from "react"
import Cabecalho from "../../components/cabecalho"


export default function Exec04() {

  const [nomeLivro, setNomeLivro] = useState("")
  const [paginasLivro, setPaginasLivro] = useState(0)
  const [segundosPagina, setSegundosPagina] = useState(0)
  const [temp, setTemp] = useState(0)


  function calcLivro() {
    let calc = (paginasLivro * segundosPagina)/ 3600
    setTemp(calc)
  }

  return (
    <div className="pagina-exec04">
      <Cabecalho/>
      <main>
        <div className="topo">
          <Link to='/'><ArrowLeft className="icon" /></Link>
          <h1>Exercício 04 - Leitura de livro</h1>
        </div>
        <div className="line" />
        <div className="container-exec">
          <p>
            Implementar um programa em Javascript que <b>calcule</b> o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página          
          </p>
        </div>
        <center>
          <div className="container-execs">
            
            <h4>Nome do Livro</h4>
            <input onChange={e => setNomeLivro(e.target.value)} type="text" placeholder="..."/>
            <h4>Total de paginas</h4>
            <input onChange={e => setPaginasLivro(e.target.value)} type="text" placeholder="0"/>
            <h4>Tempo em segundos de leitura</h4>
            <input onChange={e => setSegundosPagina(e.target.value)} type="text" placeholder="0"/>

            <div className="botao">
              <button onClick={calcLivro}>Executar</button>
            </div>

          </div>
        </center>
        <div className="result">
          Você lerá {nomeLivro} em {temp.toFixed(2)} horas.
        </div>
      </main>
    </div>
  )
}