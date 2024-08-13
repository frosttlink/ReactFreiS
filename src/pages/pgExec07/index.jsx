import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import { useState } from "react"


export default function Exec07() {

  const [cor1, setCor1] = useState(0)
  const [cor2, setCor2] = useState(0)
  const [primarias, setPrimarias] = useState(true)

  function verificacao() {
    // eslint-disable-next-line eqeqeq
    if (cor1 == 'azul' && cor2 == 'amarelo') {
      setPrimarias("true")
    } else {
      setPrimarias("false")
    }
  }

  return (
    <div className="pagina-exec07">
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
          <h1>Exercício 07 - Cores primárias</h1>
        </div>
        <div className="line" />
        <div className="container-exec">
          <p>
            Implementar um programa em javascript para <b>verificar</b> se duas cores são primárias
          </p>
        </div>
        <center>
          <div className="container-execs">
            
            <h4>Cor 1</h4>
            <input onChange={e => setCor1(e.target.value)} type="text" placeholder="Informe a cor desejada"/>
            <h4>Cor 2</h4>
            <input onChange={e => setCor2(e.target.value)} type="text" placeholder="Informe a segunda cor desejada"/>

            <div className="botao">
              <button onClick={verificacao} >Executar</button>
            </div>

          </div>
        </center>
        <div className="result">
          As duas cores são primárias? {primarias}
        </div>
      </main>
    </div>
  )
}