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
            <Link className='inicio'>Inicio</Link>
            <Link className='sobre'>Sobre</Link>
          </div>
        </div>
      </header>
        <h2>Escolha um treino...</h2>
      <div className='container'>
        <div className='subcontainer-amarelo'>
          <img src="" alt="" />
          <h3>Cupom de desconto</h3>
          <p>Exercício 01</p>
        </div>
        <div className='subcontainer-verde'>
          <img src="" alt="" />
          <h3>Cupom de desconto</h3>
          <p>Exercício 01</p>
        </div>
        <div className='subcontainer-azul'>
          <img src="" alt="" />
          <h3>Cupom de desconto</h3>
          <p>Exercício 01</p>
        </div>
      </div>
    </div>
  );
}
