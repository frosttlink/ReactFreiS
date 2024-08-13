import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import { useState } from "react"


export default function Exec06() {

  const [salarioBase, setSalarioBase] = useState(0)
  const [bonus, setBonus] = useState(0)
  const [desconto, setDesconto] = useState(0)
  const [salarioLiq, setSalarioLiq] = useState(0)

  function calcSal() {
    let calc = (salarioBase * (bonus / 100)) - (desconto)
    setSalarioLiq(calc)
  }

  return (
    <div className="pagina-exec06">
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
          <h1>Exercício 06 - Salário líquido</h1>
        </div>
        <div className="line" />
        <div className="container-exec">
          <p>
          Implemente um programa em javascript para <b>calcular o salário líquido</b>  de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais
          </p>
        </div>
        <center>
          <div className="container-execs">
            
            <h4>Salario Base</h4>
            <input onChange={e => setSalarioBase(e.target.valueAsNumber)} type="number" placeholder="0"/>
            <h4>Bonus mensal em porcentagem</h4>
            <input onChange={e => setBonus(e.target.valueAsNumber)} type="number" placeholder="0"/>
            <h4>Total de descontos</h4>
            <input onChange={e => setDesconto(e.target.valueAsNumber)} type="number" placeholder="0"/>

            <div className="botao">
              <button onClick={calcSal}>Executar</button>
            </div>

          </div>
        </center>
        <div className="result">
          Seu salário líquido é de R${salarioLiq}
        </div>
      </main>
    </div>
  )
}