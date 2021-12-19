import React from "react";
import '../styles/SignUp.css';
import model2 from '../assets/model2.png';
import behindPointsToModel2 from "../assets/behindPointsToModel2.png";

const SignUp = () => {
    return (
        <div className="container-signup">
            <div className="photos">
                <img src={model2} alt="img" className="img-register" />
                <img src={behindPointsToModel2} alt="behinds-points" className="img-behindpoints2" />
            </div>

            <div className="signup-form-contain">
                <form action="/signup" className="formu-login">
                    <h1 className="title-signup">Registrate</h1>
                    <div className="inputs">
                        <label className="label-name">Nombre</label>
                        <input type="text" name="name" className="name" placeholder="Nombre y Apellidos" />
                        <label className="label-email">Email</label>
                        <input type="email" name="email" className="email" placeholder="tu@correo.com" />
                        <label className="label-pass">Contraseña</label>
                        <input type="password" name="password" className="pass" placeholder="* * * * * * *" />
                        <label className="label-pass">Confirmar Contraseña</label>
                        <input type="password" className="pass" placeholder="* * * * * * *" />
                    </div>

                    <button className="btn-signup">Registrarme</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
