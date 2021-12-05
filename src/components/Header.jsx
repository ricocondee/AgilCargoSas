import React from "react";
import { NavLink } from 'react-router-dom'
import Logo from "@assets/logo.png"
import '@styles/header.css'

const Header = () => {
    return (
        <div>
            <header className="">
                <nav className="nav-header container-fluid">
                    <div className="ul-container">
                        <ul>
                            <li><a href="/track-shipping" id="rastrear">Rastrear</a></li>
                            <li><a href="/budget" id="cotizar">Cotizar</a></li>
                            <li className="logo"><img src={Logo}/></li>
                            <li><a href="/" id="inicio">Inicio</a></li>
                            <li><a href="/contact" id="contacto">Contacto</a></li>
                            <i><NavLink to="/login" id="btn-login">Ingresar</NavLink></i>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
