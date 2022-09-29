import './video.css'

export const Video = ({ data }) => {

    return (
        <>
            <div className="capacitacion__Intro">
                <div className="capacitacion__content">
                    <div className="capacitacion__video">
                        <p>{data.tema}</p>
                        {data.frame}
                    </div>
                    <div className="capacitacion__importante">
                        <h4>{data.titulo}</h4>
                        <ol className='capacitacion__lista'>
                            {
                                data.arreglo.map(item => (
                                    <li key={item.id}>{item.info}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
