import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from './pages/pgInicio';
import Sobre from "./pages/pgSobre";
import Exec01 from "./pages/pgExec01";
import Exec02 from "./pages/pgExec02";
import Exec03 from "./pages/pgExec03";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index /> }/>
        <Route path='/sobre' element={ <Sobre /> }/>
        <Route path="/exec01" element={ <Exec01/> }/>
        <Route path="/exec02" element={ <Exec02/> }/>
        <Route path="/exec03" element={ <Exec03/> }/>
      </Routes>
    </BrowserRouter>
  )
}