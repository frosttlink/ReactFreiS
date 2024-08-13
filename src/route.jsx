import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from './pages/pgInicio';
import Sobre from "./pages/pgSobre";
import Exec01 from "./pages/pgExec01";
import Exec02 from "./pages/pgExec02";
import Exec03 from "./pages/pgExec03";
import Exec04 from "./pages/pgExec04";
import Exec05 from "./pages/pgExec05";
import Exec06 from "./pages/pgExec06";
import Exec07 from "./pages/pgExec07";
import Exec08 from "./pages/pgExec08";
import Exec09 from "./pages/pgExec09";
import Exec10 from "./pages/pgExec10";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index /> }/>
        <Route path='/sobre' element={ <Sobre /> }/>
        <Route path="/exec01" element={ <Exec01/> }/>
        <Route path="/exec02" element={ <Exec02/> }/>
        <Route path="/exec03" element={ <Exec03/> }/>
        <Route path="/exec04" element={ <Exec04/> }/>
        <Route path="/exec05" element={ <Exec05/> }/>
        <Route path="/exec06" element={ <Exec06/> }/>
        <Route path="/exec07" element={ <Exec07/> }/>
        <Route path="/exec08" element={ <Exec08/> }/>
        <Route path="/exec09" element={ <Exec09/> }/>
        <Route path="/exec10" element={ <Exec10/> }/>

        
      </Routes>
    </BrowserRouter>
  )
}