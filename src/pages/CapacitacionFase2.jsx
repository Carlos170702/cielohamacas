import { useNavigate } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Video } from '../components/Video'
import '../css/capacitacion.css'
import '../css/capacitacionFase2.css'

export const CapacitacionFase2 = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/fase3', {
      replace: true
    })
  }

  const freame = <iframe width="560" height="315" src="https://www.youtube.com/embed/UIVuqCwv1Xg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
  const freame2 = <iframe width="560" height="315" src="https://www.youtube.com/embed/FmHt91Y-P38" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

  const data = [
    {
      id: 1, tema: 'Elaboracion', titulo: 'Pasos.', arreglo: [
        { id: 1, info: 'A continuacion precentamos el proceso que se lleva a cabo en la elaboracion de nuestras hamacas artesanales.' },
      ], frame: freame
    },
    {
      id: 2, tema: 'Instalacion', titulo: 'Pasos de la instalacion.', arreglo: [
        { id: 1, info: 'la capacitacion de nuestro colaborador es de vital importancia para ofrecer un proucto de calidad en el proceso de instalacion, este modelo 3D presenta el prototipo y elementos que compone la insatalacion de nuestros productos.' },
      ], frame: freame2
    },
    {
      id: 3, tema: 'Mantenimiento', titulo: 'Pasos.', arreglo: [
        { id: 1, info: 'Este proceso se realiza cada 6 meses en promedio se especificara los terminos en que se deben encontrar los elementos para considerar un cambio o repocision.' },
      ], frame: freame
    },
  ]

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="video">
          {
            data.map(item => (
              <Video key={item.id} data={item} />
            ))
          }
        </div>
        <div className="siguiente">
          <button
            onClick={handleClick}
          >Fase 3
          </button>
        </div>
      </div>
    </>
  )
}
