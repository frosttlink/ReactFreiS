import Cabecalho from '../../components/cabecalho';
import Card from '../../components/card';
import './index.scss';
import { Link } from "react-router-dom"

export default function Index() {
  let cardForm = [
    
    {
      link: '/exec01',
      cor: '/assets/images/amarelo.svg',
      titulo: 'Cupom de desconto',
      subtitulo: 'Exercicio 01'
    },
    {
      link: '/exec02',
      cor: '/assets/images/verde.svg',
      titulo: 'Converter Kg/gramas',
      subtitulo: 'Exercicio 02'
    },
    {
      link: '/exec03',
      cor: '/assets/images/azul.svg',
      titulo: 'Valor total por quantidade',
      subtitulo: 'Exercicio 03'
    },
    {
      link: '/exec04',
      cor: '/assets/images/azulEscuro.svg',
      titulo: 'Leitura de livro',
      subtitulo: 'Exercicio 04'
    },
    {
      link: '/exec05',
      cor: '/assets/images/roxo.svg',
      titulo: 'Média de notas',
      subtitulo: 'Exercicio 05'
    },
    {
      link: '/exec06',
      cor: '/assets/images/bronzeado.svg',
      titulo: 'Salário líquido',
      subtitulo: 'Exercicio 06'
    },
    {
      link: '/exec07',
      cor: '/assets/images/cyan.svg',
      titulo: 'Cores primárias',
      subtitulo: 'Exercicio 07'
    },
    {
      link: '/exec08',
      cor: '/assets/images/black.svg',
      titulo: 'Temperatura',
      subtitulo: 'Exercicio 08'
    },
    {
      link: '/exec09',
      cor: '/assets/images/gray.svg',
      titulo: 'Sorveteria',
      subtitulo: 'Exercicio 09'
    },
    {
      link: '/exec10',
      cor: '/assets/images/brown.svg',
      titulo: 'Calculo de IMC com histórico',
      subtitulo: 'Exercicio 10'
    },
    {
      link: '/exec11',
      cor: '/assets/images/purple.svg',
      titulo: 'Tabuada',
      subtitulo: 'Exercicio 11'
    },
    {
      link: '/exec12',
      cor: '/assets/images/yellow.svg',
      titulo: 'Comparador de pessoas',
      subtitulo: 'Exercicio 12'
    }
]





  return (
    <div className="pagina-inicial">
      <Cabecalho/>
        <h2>Escolha um treino...</h2>

      <div className='container'>
        <div className="subcontainers">
          <div className='cards'>
            {
              cardForm.map(c =>
                <Card
                  link ={c.link}
                  cor = {c.cor}
                  titulo ={c.titulo}
                  subtitulo ={c.subtitulo}
              />
              )
            }
          </div>


        </div>
      </div>
    </div>
  );
}

