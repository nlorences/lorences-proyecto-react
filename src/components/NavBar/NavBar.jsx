import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <header>
            {/* logo provisorio */}
            <div className="navBar">
                <a className="logoLink" href="#">
                    <img className="logo"
                        src={logo} 
                        alt="Logo"
                    />
                </a>
                <nav>
                    <ul className="nav">
                        <li><a href="#">Vinos</a></li>
                        <li><a href="#">Espumantes</a></li>
                        <li><a href="#">Cervezas</a></li>
                        <li><a href="#">Accesorios</a></li>
                        <li><a href="#">Ofertas</a></li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>

    );
}

export default NavBar;