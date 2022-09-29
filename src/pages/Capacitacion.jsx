import { NavBar } from "../components/NavBar"
import { Video } from "../components/Video"
import { useNavigate } from 'react-router-dom'

import '../css/capacitacion.css'
import { useEffect } from "react"

export const Capacitacion = () => {
    const navigate = useNavigate()

    const freame = <iframe width="560" height="315" src="https://www.youtube.com/embed/UIVuqCwv1Xg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

    const data = [
        {
            id: 1, tema: 'Introduccion', titulo: 'Datos importantes a tomar en cuenta.', arreglo: [
                { id: 1, info: 'somos una empresa lideres en la elaboracion de hamacas artesanales que busca satisfacer las principales necesidades de nuestros clientescomo hoteles y restaurantes.' },
            ], frame: freame
        },
        {
            id: 2, tema: 'Politicas de la empresa', titulo: 'politicas mas importantes.', arreglo: [
                { id: 1, info: 'Politica de privacidad' },
                { id: 2, info: 'Politica de rembolso' },
                { id: 3, info: 'Apuesta por la mejora continuo de su desempeño asumiendo la responsabilidad de cumplir con las disposiciones basada en su politica que se enorgullese de aplicar en todo lo que produce y comercializa' },
            ], frame: freame
        },
    ]

    const handleClick = () => {
        navigate('/fase2', {
            replace: true
        })
    }

    useEffect(() => {
      const user = localStorage.getItem('user')
      !user && navigate('/')
    }, [])
    

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
                    >Fase 2
                    </button>
                </div>
            </div>
        </>
    )
}
