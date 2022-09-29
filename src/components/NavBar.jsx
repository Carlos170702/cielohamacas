import { Link } from "react-router-dom";
import { FiAlignJustify, FiUser } from 'react-icons/fi'
import './Nav.css'
import { useEffect, useState } from "react";

export const NavBar = () => {
    const [user, setUser] = useState(false)
    const [nav, setNav] = useState(false)
    const [hamburger, setHamburger] = useState(false)

    useEffect(() => {
        setUser(localStorage.getItem('user'))
    }, [])

    const onClickNav = () => {
        setNav(!nav)
    }

    const onClickHumberger = () => {
        setHamburger(!hamburger)
        console.log(hamburger)
    }

    const onClickcerrar = () => {
        localStorage.clear()
    }

    return (
        <>
            <div className="container Nav">
                <Link to={'/'} className="Nav__logo">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cielohamaca.appspot.com/o/cielo_hamacas_logo_1_540x.webp?alt=media&token=bbf8ea17-4b94-44b0-b54a-262ea772cd47" alt="logo de cielo hamacas" />
                    <p>IN NETWORK</p>
                </Link>
                <nav className="Nav__enlaces">
                    {user
                        ? <Link className={`Nav__enlace ${hamburger && 'infHamburger'}`} to={"/Capacitacion"}>Capacitación</Link>
                        : <Link className="Nav__enlace" to={"/Registro"}>Registro</Link>}
                    <div className="Nav__user">
                        <FiUser
                            onClick={onClickNav}
                            className="Nav__icon Nav__icon--user"
                        />
                        <ul className={`${nav ? 'infUser' : 'user'}`}>
                            <li><Link to={'/'} >Perfil</Link></li>
                            <li>{user
                                ? <Link to={'/'} onClick={onClickcerrar} >Cerrar seccion</Link>
                                : <Link to={'/registro'}>Login</Link>
                            }</li>
                        </ul>
                    </div>
                    <div className="Nav__hamburger">
                        <FiAlignJustify
                            className="Nav__icon"
                            onClick={onClickHumberger}
                        />
                    </div>
                </nav>
            </div>
        </>
    )
}
