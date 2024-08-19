import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import { useState } from "react"
import Cabecalho from "../../components/cabecalho"


export default function Exec05() {

  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [n3, setN3] = useState(0)
  const [media, setMedia] = useState(0)

  function calcMedia() {
    let calc = Number((n1 + n2 + n3) / 3)
    setMedia(calc)
  }



  return (
    <div className="pagina-exec05">
      <Cabecalho/>
      <main>
        <div className="topo">
          <Link to='/'><ArrowLeft className="icon" /></Link>
          <h1>Exercício 05 - Média de notas</h1>
        </div>
        <div className="line" />
        <div className="container-exec">
          <p>
            Implemente um programa em Javascript para <b>verificar</b> se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.
          </p>
        </div>
        <center>
          <div className="container-execs">
            
            <h4>Nota 01</h4>
            <input onChange={e => setN1(e.target.valueAsNumber)} type="number" placeholder="0"/>
            <h4>Nota 02</h4>
            <input onChange={e => setN2(e.target.valueAsNumber)} type="number" placeholder="0"/>
            <h4>Nota 03</h4>
            <input onChange={e => setN3(e.target.valueAsNumber)} type="number" placeholder="0"/>

            <div className="botao">
              <button onClick={calcMedia}>Executar</button>
            </div>

          </div>
        </center>
        <div className="result">
          A média do aluno é {media}
          <br /> O aluno passou? 
        </div>
      </main>
    </div>
  )
}