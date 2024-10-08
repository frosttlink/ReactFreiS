import { ArrowLeft } from "lucide-react"
import { useState } from "react";
import "./index.scss"

import { Link } from "react-router-dom"
import Cabecalho from "../../components/cabecalho";


export default function Exec01() {

  const [valorPedido, setValorPedido] = useState(0)
  const [cupom, setCupom] = useState(0)
  const [total, setTotal] = useState(0)
  
  function calcularTotal() {
    let calculo = valorPedido - cupom
    setTotal (calculo)
  }

  function teclaApertada(e) {
    if (e.key == 'Enter') {
        calcularTotal()
    }
}
  
  return (
    <div className="pagina-exec01">
      <Cabecalho/>
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
            <input onKeyUp={teclaApertada}   onChange={e => setValorPedido(e.target.value)} type="text" placeholder="0"/>
            <h4>Informe o valor do cupom</h4>
            <input onKeyUp={teclaApertada}  onChange={e => setCupom(e.target.value)}  type="text" placeholder="0"/>
            <div onClick={calcularTotal} className="botao"><button >Executar</button></div>
          </div>
        </center>
        <div className="result">
          Resultado: O total é R$ {total}
        </div>
      </main>
    </div>
  )
}