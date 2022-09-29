import { NavBar } from "../components/NavBar"
import { Video } from "../components/Video"
import '../css/capacitacion.css'

export const Simulador = () => {

    const handleClick = () => {
        navigate('/', {
            replace: true
        })
    }


    const data = [
        {
            id: 1, tema: 'Simulacion', titulo: 'Prototipo 3D.', arreglo: [
                { id: 1, info: 'simulacion 3D.' },
            ]
        },
        // {
        //     id: 2, tema: 'Politicas de la empresa', titulo: 'politicas mas importantes.', arreglo: [
        //         { id: 1, info: 'Politica de privacidad' },
        //         { id: 2, info: 'Politica de rembolso' },
        //         { id: 3, info: 'Apuesta por la mejora continuo de su desempeño asumiendo la responsabilidad de cumplir con las disposiciones basada en su politica que se enorgullese de aplicar en todo lo que produce y comercializa' },
        //     ]
        // },
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
                    >Fase 2
                    </button>
                </div>
            </div>
        </>
    )
}
