/* eslint-disable eqeqeq */
import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import { useState } from "react"
import { Trash2 } from "lucide-react"


export default function Exec10() {

  const [novoImc, setNovoImc] = useState("")
  const [listaImc, setListaImc] = useState([])
  const [editando, setEditando] = useState(-1);


  function adicionarImc() {
    if (novoImc != "") {
      if (editando == -1) {
        setListaImc([...listaImc, novoImc])
        setNovoImc("")
      } else {
        listaImc[editando] = novoImc;
        setListaImc([...listaImc])
        setNovoImc("")
        setEditando(-1)
      }
    }
  }

  function removerImc(pos) {
    setNovoImc(listaImc[pos])
    setEditando(pos)
  }


  return (
    <div className="pagina-exec10">
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
          <h1>Exercício 10 - Calculo de IMC com histórico</h1>
        </div>
        <div className="line" />
        <div className="container-exec">
          <p>
          Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, <b>calcule o IMC</b> e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação          </p>
        </div>
          <div className="container-execs">
            
            <div className="info_imc">
              <h4>Altura</h4>
              <input onChange={e => setNovoImc(e.target.value)} type="text" placeholder="Informe a altura"/>
            </div>
            <div className="info_imc">
              <h4>Peso</h4>
              <input type="text" placeholder="Informe o peso"/>
            </div>

            <div className="botao">
              <button onClick={adicionarImc}>Executar</button>
            </div>


          </div>
            <div className="lista_imc">
              <ul>
                {listaImc.map((item, pos) =>  (
                  <li key={pos}>
                    {item}
                    <Trash2 className="icon_trash" onClick={() => removerImc(pos)} />
                  </li>
                ))}
              </ul>
            </div>
        <div className="result">

        </div>
      </main>
    </div>
  )
}