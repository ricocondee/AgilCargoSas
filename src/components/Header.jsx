import React from "react";
import Logo from "../assets/logo.svg"
import '../styles/header.css'

const Header = () => {
    return (
        <div className="container-fluid">
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item"><a className="nav-link text-light me-5" href="">Rastrear</a></li>
                        <li className="nav-item"><a className="nav-link text-light me-5" href="">Cotizar</a></li>
                        <img src={Logo} className="img-fluid" width="225px" alt="Agil Cargo Logo" />
                        <li className="nav-item"><a className="nav-link text-light ms-5 me-5" href="">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link text-light me-5" href="">Contacto</a></li>
                        <li className="nav-item"><a className="nav-link text-light me-5" href="">Ingresar</a></li>
                    </ul>
                </nav>
            </header>

        </div>
    );
};

export default Header;
