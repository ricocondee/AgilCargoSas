import React from 'react';
import model2 from '../assets/model2.png'
import behindPoints from '../assets/behindPoints.png'
import '../styles/Login.css'

const Login = () => {
    return (
        <div className="login-page-contain">
           <div className="form-contain">
           <form action="" className="">
                <h1 className="title-login">Iniciar Sesion</h1>
                <label className="text-email">Email</label>
                <input type="text" className="campo-email" id="floatingInputValue" placeholder="tu@correo.com"/>
                <label className="text-password">Contraseña</label>
                <input type="password" className="campo-password" placeholder="* * * * * * * *"/>
                <i className="bi bi-eye-fill"></i>
                <i className="bi bi-eye-slash-fill"></i>
                <input type="submit" className="btn-send" value="Ingresar"/>
                <p className="you-forgot-pass">¿Olvidaste tu contraseña?</p>
                <button className="">Registrarse</button>
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
