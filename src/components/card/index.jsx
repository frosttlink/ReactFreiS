import { Link } from "react-router-dom"
import "./index.scss"


export default function Card(props) {
  return (
    <Link to={props.link} className='link'>
    <div className='subcontainer-cores'>
      <img src={props.cor} alt="" />
      <h3>{props.titulo}</h3>
      <p>{props.subtitulo}</p>
    </div>
  </Link>
  )
}