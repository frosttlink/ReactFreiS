/* eslint-disable eqeqeq */
import { ArrowLeft } from "lucide-react"
import "./index.scss"

import { Link } from "react-router-dom"
import Cabecalho from "../../components/cabecalho"


export default function Exec12() {
  return (
    <div className="pagina-exec12">
      <Cabecalho />
      <main>
        <div className="topo">
          <Link to='/'><ArrowLeft className="icon" /></Link>
          <h1>Exercício 12 - Comparador de pessoas</h1>
        </div>
        <div className="line" />
        <div className="container-exec">
          <p>
            Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas.
          </p>
        </div>
        <center>
          <div className="container-execs">

          </div>
        </center>
        <div className="result">

        </div>
      </main>
    </div>
  )
}