import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "../components/card"
import { Information } from "../components/Information"
import { NavBar } from "../components/NavBar"
import '../css/principal.css'

export const Principal = () => {
    const [user, setUser] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        setUser(localStorage.getItem('user'))
    }, [])


    const handleClick = () => {
        navigate('Registro', {
            replace: true
        })
    }

    const data = [
        { id: 1, url: 'https://cdn.shopify.com/s/files/1/0574/6075/2457/products/chair_coralina_large_add_2_720x.jpg?v=1654190830', nombre: '', subnomre: '', precio: '$ 1,840.00' },
        { id: 2, url: 'https://cdn.shopify.com/s/files/1/0574/6075/2457/products/Project64_540x.jpg?v=1658764780', nombre: '', subnomre: '', precio: '$ 1,700.00' },
        { id: 3, url: 'https://cdn.shopify.com/s/files/1/0574/6075/2457/products/oso_bacalar_large_add_5_720x.jpg?v=1654190957', nombre: '', subnomre: '', precio: '$ 1,500.00' },
        { id: 4, url: 'https://cdn.shopify.com/s/files/1/0574/6075/2457/products/2_043809bc-6978-445c-8967-af597e1485d8_720x.jpg?v=1654626504', nombre: '', subnomre: '', precio: '$ 1,350.00' },
        { id: 5, url: 'https://cdn.shopify.com/s/files/1/0574/6075/2457/products/2_043809bc-6978-445c-8967-af597e1485d8_540x.jpg?v=1654626504', nombre: '', subnomre: '', precio: '$ 1,650.00' },
        { id: 6, url: 'https://cdn.shopify.com/s/files/1/0574/6075/2457/products/hammock_tulum_turquoise_large_add_1_540x.jpg?v=1654190885', nombre: '', subnomre: '', precio: '$ 2,200.00' }
    ]

    return (
        <>
            <NavBar />
            <div className="Principal2">
                {
                    !user && <div className="background"></div> 
                }
                <img src="https://cdn.shopify.com/s/files/1/0574/6075/2457/products/merida_canvas_hammock_large_add_1_1024x1024@2x.jpg?v=1654190766" alt="imagen de artesano" />
                {
                    !user && <div className="principal__register">
                        <h2>Unete a nosotros</h2>
                        <button
                            onClick={handleClick}
                        >Registrarse</button>
                    </div>
                }
            </div>
            <div className="container productos">
                <h1>Productos</h1>
                <div className="cards">
                    {
                        data.map(item => (
                            <Card key={item.id} data={item} />
                        ))
                    }
                </div>
            </div>
            <Information />
        </>
    )
}