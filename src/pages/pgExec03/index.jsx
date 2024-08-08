import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"

export default function Exec03() {
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
          <Link to='/'><ArrowLeft className="icon"/></Link>
          <h1>Exercício 03 - Valor total por quantidade</h1>
        </div>
          <div className="line"/>
        <div className="container-exec">
          <p>
            Implementar um programa em Javascript para calcular <b>o total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande,</b> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente
          </p>
        </div>
        <center>
          <div className="container-execs">
            <div>
              <h4>Quantidade pequeno</h4>
              <input type="text" placeholder="0"/>
            </div>
            <div>
              <h4>Quantidade médio</h4>
              <input type="text" placeholder="0"/>
            </div>
            <div>
              <h4>Quantidade grande</h4>
              <input type="text" placeholder="0"/>
            </div>
            <div className="botao">
              <button>Executar</button>
            </div>
          </div>
        </center>
        <div className="result">
          Resultado: O total é R$ 0,00
        </div>
      </main>
    </div>
  )
}