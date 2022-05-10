import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <header>
            <div className="nav-bar-container">
                <NavLink to='/' className="logo-link"> 
                    <img className="logo"
                        src={logo} 
                        alt="Logo"
                    />
                </NavLink>
                <nav>
                    <ul className="nav">
                        <li><NavLink to='/category/tintos' className={nav => nav.isActive ? 'nav-active':''}>Vinos Tintos</NavLink></li>
                        <li><NavLink to='/category/blancos' className={nav => nav.isActive ? 'nav-active':''}>Vinos Blancos</NavLink></li>
                        <li><NavLink to='/category/espumantes' className={nav => nav.isActive ? 'nav-active':''}>Espumantes</NavLink></li>
                        <li><NavLink to='/category/cervezas' className={nav => nav.isActive ? 'nav-active':''}>Cervezas</NavLink></li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>

    );
}

export default NavBar;