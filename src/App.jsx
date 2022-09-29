import { Navigate, Route, Routes } from 'react-router-dom'
import './css/App.css'
import { Acerca, Capacitacion, CapacitacionFase2, Principal, Registro, Simulador } from './pages'

export const App = () => {
  return (
    <>
      <div className='principal' >
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/capacitacion' element={<Capacitacion />} />
          <Route path='/fase2' element={<CapacitacionFase2 />} />
          <Route path='/fase3' element={<Simulador />} />
          <Route path='/Acerca' element={<Acerca />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
      </div>
    </>
  )
}
