import './card.css'

export const Card = ({ data }) => {
    return (
        <>
            <div className="card">
                <div className="card__img">
                    <img src={data.url} alt={data.name} />
                </div>
                <h2>hamaca de algodon</h2>
                <h4>SXLASCOR</h4>
                <span>{data.precio} MXN</span>
            </div>
        </>
    )
}
