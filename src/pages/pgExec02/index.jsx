import { ArrowLeft } from "lucide-react"
import { useState } from "react";
import "./index.scss"

import { Link } from "react-router-dom"

export default function Exec02() {

  const [valorKg, setValorKg] = useState(0)
  const [valorG, setValorG] = useState(0)


  function calcG() {
    let calc = valorKg * 1000
    setValorG(calc)
  }


  return (
    <div className="pagina-exec02">
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
          <Link to='/'><ArrowLeft className="icon"/></Link>
          <h1>Exercício 02 - Converter Kg/gramas</h1>
        </div>
          <div className="line"/>
        <div className="container-exec">
          <p>
            Implementar um programa em Javascript para <b>converter kilos em gramas.</b>
          </p>
        </div>
        <center>
          <div className="container-execs">
            <h4>Valor em kilos</h4>
            <input onChange={e => setValorKg(e.target.value)} type="text" placeholder="0"/>
            <div className="botao"><button onClick={calcG}>Executar</button></div>
          </div>
        </center>
        <div className="result">
          Resultado: O total é {valorG}
        </div>
      </main>
    </div>
  )
}