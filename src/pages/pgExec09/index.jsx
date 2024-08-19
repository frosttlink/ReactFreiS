import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import { useState } from "react"
import Cabecalho from "../../components/cabecalho"


export default function Exec09() {

  const [grama, setGrama] = useState(0)
  const [result, setResult] = useState(0)
  
  let kg = 1000;

  function verificacao() {
    if (grama < kg && grama > 0) {
      let calc = (grama * 3.5) / 100
      setResult(calc)
    } else if (grama >= kg) {
      let calc = (grama * 3.0) / 100
      setResult(calc)
    // eslint-disable-next-line eqeqeq
    } else if (grama == 0) {
      setResult(0)
    }
  }

  return (
    <div className="pagina-exec09">
     <Cabecalho/>
      <main>
        <div className="topo">
          <Link to='/'><ArrowLeft className="icon" /></Link>
          <h1>Exercício 09 - Sorveteria</h1>
        </div>
        <div className="line" />
        <div className="container-exec">
          <p>
            Implementar um programa em javascript que <b>calcule o total</b> a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de <b>100g é R$ 3,50</b> mas se o total de gramas for a partir de 1kg, o preço das 100g <b>diminui</b> 50 centavos.
          </p>
        </div>
        <center>
          <div className="container-execs">
            
            <h4>Total de gramas</h4>
            <input onChange={e => setGrama(e.target.value)} type="text" placeholder="Informe quantas gramas"/>

            <div className="botao">
              <button onClick={verificacao} >Executar</button>
            </div>

          </div>
        </center>
        <div className="result">
        O total a se pagar é R${result}
        </div>
      </main>
    </div>
  )
}