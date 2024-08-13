import './index.scss';
import { Link } from "react-router-dom"

export default function Index() {
  return (
    <div className="pagina-inicial">
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
        <h2>Escolha um treino...</h2>

      <div className='container'>
        <div className="subcontainers">

          <Link to='/exec01' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/amarelo.svg" alt="" />
              <h3>Cupom de desconto</h3>
              <p>Exercício 01</p>
            </div>
          </Link>


          <Link to='/exec02' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/verde.svg" alt="" />
              <h3>Converter Kg/gramas</h3>
              <p>Exercício 02</p>
            </div>
          </Link>


          <Link to='/exec03' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/azul.svg" alt="" />
              <h3>Valor total por quantidade</h3>
              <p>Exercício 03</p>
            </div>
          </Link>

          <Link to='/exec04' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/azulEscuro.svg" alt="" />
              <h3>Leitura de livro</h3>
              <p>Exercício 04</p>
            </div>
          </Link>

          <Link to='/exec05' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/roxo.svg" alt="" />
              <h3>Média de notas</h3>
              <p>Exercício 05</p>
            </div>
          </Link>

          <Link to='/exec06' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/salmon.svg" alt="" />
              <h3>Média de notas</h3>
              <p>Exercício 06</p>
            </div>
          </Link>

          <Link to='/exec07' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/cyan.svg" alt="" />
              <h3>Cores primárias</h3>
              <p>Exercício 07</p>
            </div>
          </Link>

          <Link to='/exec08' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/black.svg" alt="" />
              <h3>Temperatura</h3>
              <p>Exercício 08</p>
            </div>
          </Link>

          <Link to='/exec09' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/gray.svg" alt="" />
              <h3>Sorveteria</h3>
              <p>Exercício 09</p>
            </div>
          </Link>

          <Link to='/exec10' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/brown.svg" alt="" />
              <h3>Calculo de IMC com histórico</h3>
              <p>Exercício 10</p>
            </div>
          </Link>

          <Link to='/exec11' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/purple.svg" alt="" />
              <h3>Tabuada</h3>
              <p>Exercício 11</p>
            </div>
          </Link>

          <Link to='/exec12' className='link'>
            <div className='subcontainer-cores'>
              <img src="/assets/images/yellow.svg" alt="" />
              <h3>Comparador de pessoas</h3>
              <p>Exercício 12</p>
            </div>
          </Link>


        </div>
      </div>
    </div>
  );
}
