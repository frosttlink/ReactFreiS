import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import { useState } from "react"


export default function Exec08() {

  const [temp, setTemp] = useState(0)
  const [result, setResult] = useState(true)

  function verificacao() {
    if (temp >= 41) {
      setResult("Hipertermia")
    } else if (temp >= 39.6 && temp < 41) {
      setResult("Febre Alta")
    } else if (temp >= 37.6 && temp < 39.6) {
      setResult("Febre")
    } else if (temp >= 36 && temp < 37.6) {
      setResult("Normal")
    } else if (temp < 36) {
      setResult("Hipotermia")
    }
  }

  return (
    <div className="pagina-exec08">
      <header>
        <div className='cabecalho'>
          <div className='logo-header'>
            <img className='img-logo' src="/assets/images/logo.svg" alt="logo_frei" />
            <h1>React FreiS</h1>
          </div>
          <div className='navegacao-header'>
            <Link to="/" className='link'>Inicio</Link>
            <Link to="/sobre" className='link'>Sobre</Link>
          </div>
        </div>
      </header>
      <main>
        <div className="topo">
          <Link to='/'><ArrowLeft className="icon" /></Link>
          <h1>Exercício 08 - Temperatura</h1>
        </div>
        <div className="line" />
        <div className="container-exec">
          <p>
          Implementar um programa em javascript que a partir da temperatura, <b>avalie a situação</b> da pessoa conforme a tabela. Ao final, apresente a classificação
          </p>
        </div>
        <center>
          <div className="container-execs">
            
            <h4>Temperatura</h4>
            <input onChange={e => setTemp(e.target.value)} type="text" placeholder="Informe a temperatura"/>

            <div className="botao">
              <button onClick={verificacao} >Executar</button>
            </div>

          </div>
        </center>
        <div className="result">
        A situação para sua temperatura é {result}
        </div>
      </main>
    </div>
  )
}