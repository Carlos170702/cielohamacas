import './information.css'
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'

export const Information = () => {
    return (
        <>
            <div className="infromacion">
                <div className="container datos">
                    <div className="infromacion__links">
                        <h3>Menu</h3>
                        <ul>
                            <a href="#">Nosotros</a>
                            <a href="#">Mayoreo</a>
                            <a href="#">Contacto</a>
                            <a href="#">FAQ</a>
                            <a href="#">Políticas de privacidad</a>
                            <a href="#">Términos de servicio</a>
                            <a href="#">Políticas de reembolso</a>
                        </ul>
                    </div>
                    <div className='information__newsletter'>
                        <h3>Newsletter</h3>
                        <div className='suscripcion'>
                            <input className='suscripcion__email' type="email" placeholder='Direccion de correo electronico' />
                            <input type="submit" value={'Subscribirse'} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className='iconos__social'>
                    <FiFacebook className='icono' />
                    <FiInstagram className='icono' />
                    <FiYoutube className='icono' />
                </div>
                <footer className='container'>
                    <p>© 2022, Cielo Hamacas https://es.shopify.com/</p>
                </footer>
            </div>
        </>
    )
}
