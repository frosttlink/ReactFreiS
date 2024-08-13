import { ArrowLeft } from "lucide-react"
import { useState } from "react";
import "./index.scss"

import { Link } from "react-router-dom"

export default function Exec01() {

  const [valorPedido, setValorPedido] = useState(0)
  const [cupom, setCupom] = useState(0)
  const [total, setTotal] = useState(0)
  
  function calcularTotal() {
    let calculo = valorPedido - cupom
    setTotal (calculo)
  }
  
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
          <Link to='/'>
            <ArrowLeft className="icon"/> 
          </Link>
          <h1>Exercício 01 - Cupom de desconto</h1>
        </div>
          <div className="line"/>
        <div className="container-exec">
          <p>
            Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.
          </p>
        </div>
        <center>
          <div className="container-execs">
            <h4>Informe o valor do pedido</h4>
            <input  onChange={e => setValorPedido(e.target.value)} type="text" placeholder="0"/>
            <h4>Informe o valor do cupom</h4>
            <input onChange={e => setCupom(e.target.value)}  type="text" placeholder="0"/>
            <div  onClick={calcularTotal} className="botao"><button>Executar</button></div>
          </div>
        </center>
        <div className="result">
          Resultado: O total é R$ {total}
        </div>
      </main>
    </div>
  )
}