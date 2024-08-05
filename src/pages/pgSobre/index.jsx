import './index.scss';
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="pagina-sobre">
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
      <div className="conteudo">
        <h2>Sobre</h2>
        <div className='textos-sobre'>
          <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades. </p>

          <p>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.</p>
          <p>Estamos ansiosos para ver seu progresso e sucesso!</p>
        </div>
      </div>
    </div>
  )
}