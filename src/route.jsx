import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from './pages/pgInicio';
import Sobre from "./pages/pgSobre";
import Exec01 from "./pages/pgExec01";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index /> }/>
        <Route path='/sobre' element={ <Sobre /> }/>
        <Route path="/exec01" element={ <Exec01/> }/>
      </Routes>
    </BrowserRouter>
  )
}