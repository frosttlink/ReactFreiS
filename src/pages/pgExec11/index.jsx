/* eslint-disable eqeqeq */
import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import { useState } from "react"
import Cabecalho from "../../components/cabecalho"


export default function Exec11() {

  const [valor, setValor] = useState(0)
  const [tabuadas, setTabuadas] = useState([])


  function calculoTabuada() {
    let tabuada = []

    for (let i = 0; i <= 10; i++) {
        let r = i * valor
        let tabuadaTexto = `${valor} x ${i} = ${r}`    
        
        tabuada.push(tabuadaTexto)
    }

      setTabuadas(tabuada)
  }


  return (
    <div className="pagina-exec11">
      <Cabecalho/>
      <main>
        <div className="topo">
          <Link to='/'><ArrowLeft className="icon"/></Link>
          <h1>Exercício 11 - Tabuada</h1>
        </div>
          <div className="line"/>
        <div className="container-exec">
          <p>
            Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.
          </p>
        </div>
        <center>
          <div className="container-execs">
            <h4>Tabuada do:</h4>
            <input onChange={e => setValor(e.target.value)} type="text" placeholder="0"/>
            <div className="botao">
              <button onClick={calculoTabuada}>Executar</button>
              </div>
          </div>
        </center>
        <div className="result">
          {
            tabuadas.map(
              item => <p key={item}>{item}</p>
            )
          }
        </div>
      </main>
    </div>
  )
}