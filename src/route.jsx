import { BrowserRouter, Routerm, Route, Routes } from "react-router-dom"
import Index from './pages/pgInicio';
import Sobre from "./pages/pgSobre";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index /> }/>
        <Route path='/sobre' element={ <Sobre /> }/>
      </Routes>
    </BrowserRouter>
  )
}