import './index.scss'

export default function TituloEnunciado({corLinha}) {
  const Linha = {
    border: '0',
    backgroundColor: corLinha || '#000'
  }

    return(
        <div className="comp-TituloEnunciado">
        <div className="subcontainer-titulo">
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          <h2>Exercício 01 - Cupom de desconto</h2>
        </div>
        <hr  style={Linha}/>

        <div className="subcontainer-enunciado">
            <p>
            Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.
            </p>
        </div>
      </div>
    )
}