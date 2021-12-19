import React, {useState} from "react";
import Logo from "@assets/logo.png"
import ProfileOptions from '@components/ProfileOptions'
import '@styles/Header.css'

const Header = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
      setMenu(!menu);
    };
    return (
        <div>
            <header className="">
                <nav className="nav-header ">
                    <div className="ul-container">
                        <ul>
                            <li><a href="#/track-shipping" id="rastrear">Rastrear</a></li>
                            <li><a href="#/budget" id="cotizar">Cotizar</a></li>
                            <li className="logo"><img src={Logo} onClick={handleMenu}/></li>
                            <li><a href="#/" id="inicio">Inicio</a></li>
                            <li><a href="#/contact" id="contacto">Contacto</a></li>
                            <i><a href="#/login" id="btn-login">Ingresar</a></i>
                        </ul>
                    </div>
                </nav>
            </header>
            {menu && <ProfileOptions/>}
        </div>
    );
}

export default Header;
