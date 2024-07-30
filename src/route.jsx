import { BrowserRouter, Routerm, Route, Routes } from "react-router-dom"
import Index from './pages/pgInicio';

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index /> }/>
      </Routes>
    </BrowserRouter>
  )
}