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
            <Link to="/" className='inicio'>Inicio</Link>
            <Link to="/sobre" className='sobre'>Sobre</Link>
          </div>
        </div>
      </header>
        <h2>Escolha um treino...</h2>
      <div className='container'>
        <div className="subcontainers">
          <div className='subcontainer-amarelo'>
            <img src="/assets/images/amarelo.svg" alt="" />
            <h3>Cupom de desconto</h3>
            <p>Exercício 01</p>
          </div>
          <div className='subcontainer-verde'>
            <img src="/assets/images/verde.svg" alt="" />
            <h3>Converter Kg/gramas</h3>
            <p>Exercício 02</p>
          </div>
          <div className='subcontainer-azul'>
            <img src="/assets/images/azul.svg" alt="" />
            <h3>Valor total por quantidade</h3>
            <p>Exercício 03</p>
          </div>
        </div>
      </div>
    </div>
  );
}
