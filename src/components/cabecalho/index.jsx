import "./index.scss";
import { Link } from "react-router-dom";




export default function Cabecalho() {
  return (
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
  );
}
