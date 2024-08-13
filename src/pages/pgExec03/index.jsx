import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import { useState } from "react"


export default function Exec03() {

  const [acaiP, setAcaiP] = useState(0)
  const [acaiM, setAcaiM] = useState(0)
  const [acaiG, setAcaiG] = useState(0)
  const [totAcai, setTotAcai] = useState(0)


  function calcAcai() {
    let total = (acaiP * 13.50)  + (acaiM * 15.00)  + (acaiG * 17.50)  
    setTotAcai(total)
  }

  return (
    <div className="pagina-exec03">
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
          <h1>Exercício 03 - Valor total por quantidade</h1>
        </div>
        <div className="line" />
        <div className="container-exec">
          <p>
            Implementar um programa em Javascript para calcular <b>o total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande,</b> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente
          </p>
        </div>
        <center>
          <div className="container-execs">

            <div className="frases">
              <h4>Quantidade pequeno</h4>
              <h4>Quantidade médio</h4>
              <h4>Quantidade grande</h4>
            </div>

            <div className="inserts">
              <input onChange={e => setAcaiP(e.target.value)} type="text" placeholder="0" />
              <input onChange={e => setAcaiM(e.target.value)} type="text" placeholder="0" />
              <input onChange={e => setAcaiG(e.target.value)} type="text" placeholder="0" />
            </div>

            <div className="botao">
              <button onClick={calcAcai}>Executar</button>
            </div>

          </div>
        </center>
        <div className="result">
          Resultado: O total é {totAcai}
        </div>
      </main>
    </div>
  )
}