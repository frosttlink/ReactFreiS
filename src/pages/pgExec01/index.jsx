import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"

export default function Exec01() {
  return (
    <div className="pagina-exec01">
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
          <ArrowLeft className="icon"/>
          <h1>Exercício 01 - Cupom de desconto</h1>
        </div>
          <div className="line"/>
        <div className="container-exec">
          <p>
            Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.
          </p>
        </div>
        <div className="container-execs">
          <h3>Informe o valor do pedido</h3>
          <input type="text" placeholder="0"/>
          <h3>Informe o valor do cupom</h3>
          <input type="text" placeholder="0"/>
          <button>Executar</button>
        </div>
        <div>
          Resultado: O total é R$ 0,00
        </div>
      </main>
    </div>
  )
}