import React from "react";
import Logo from "../assets/logo.png"
import '../styles/header.css'

const Header = () => {
    return (
        <div>
            <header className="">
                <nav className="nav-header container-fluid">
                    <div className="ul-container">
                        <ul>
                            <li><a href="">Rastrear</a></li>
                            <li><a href="">Cotizar</a></li>
                            <li className="logo"><img src={Logo}/></li>
                            <li><a href="">Inicio</a></li>
                            <li><a href="">Contacto</a></li>
                            <li ><button id="btn-login">Ingresar</button></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
