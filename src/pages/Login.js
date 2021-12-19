import React from 'react';
import { NavLink } from 'react-router-dom'
import model2 from '@assets/model2.png'
import behindPoints from '@assets/behindPoints.png'
import '@styles/Login.css'

var textButton = "Ingresar"

const Login = () => {

    function showPassword() {
        const eye = document.getElementById("show-pass")
        if (document.getElementById('btn-show').checked) {
            var entry = document.getElementById("password");
            entry.type = "text";
            eye.className = "bi bi-eye-slash-fill"
        }

        else {
            var entry = document.getElementById("password");
            entry.type = "password";
            eye.className = "bi bi-eye-fill"
        }
    }

    return (
        <div className="login-page-contain">
            <div className="form-contain">
                <form action="/login" className="formu-login">
                    <h1 className="title-login">Iniciar Sesion</h1>
                    <label className="text-email">Email</label>
                    <input type="text" className="campo-email" id="email" placeholder="tu@correo.com" />
                    <label className="text-password">Contraseña</label>
                    <input type="password" className="campo-password" id="password" placeholder=" * * * * * * * *" />
                    <input type="checkbox" className="btn-show" id="btn-show" />
                    <label htmlFor="btn-show" onClick={showPassword}><i className="bi bi-eye-fill" id="show-pass"></i></label>
                    <input type="submit" className="btn-send" name="btn-send" id="btn-send" value="Ingresar" />
                    <NavLink to="/" className="you-forgot-pass">¿Olvidaste tu contraseña?</NavLink>
                    <a href="#/signup" className="signup">Registrarse</a>
                </form>
            </div>
            <div className="model-contain">
                <img src={model2} alt="Modelo sonriendo" className="model-2" />
                <img src={behindPoints} alt="" className="behind-figures" />
            </div>
        </div>
    );
}

export default Login;
