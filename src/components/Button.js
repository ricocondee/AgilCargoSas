import React from 'react';
import '@styles/Button.css'

var buttonComponent = "";
var textButton = "";

if (window.location.href.indexOf('/order') !== -1) {
    buttonComponent = "btn-order";
    textButton = "Solicitar"
}

else if (window.location.href.indexOf('/login') !== -1) {
    buttonComponent = "btn-send";
    textButton = "Ingresar"
}

else if (window.location.href.indexOf('/signup') !== -1) {
    buttonComponent = "btn-signup";
    textButton = "Registrarse"
}

else if (window.location.href.indexOf('/budget') !== -1) {
    buttonComponent = "btn-budget";
    textButton = "Cotizar"
}

else if (window.location.href.indexOf('/track-shipping') !== -1) {
    buttonComponent = "btn-track";
    textButton = "Rastrear"
}

else if (window.location.href.indexOf('/contact') !== -1) {
    buttonComponent = "btn-enviar";
    textButton = "Enviar"
}


const Button = () => {
    return (
        <input type="submit" className={buttonComponent} name={buttonComponent} id="buttonComponent" value={textButton} />
    );
}

export default Button;