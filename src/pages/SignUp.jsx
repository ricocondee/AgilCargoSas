import React from "react";
import '../styles/SignUp.css';
import model2 from '../assets/model2.png';
import behindPointsToModel2 from "../assets/behindPointsToModel2.png";

const SignUp = () => {
    return (
        <div className="container-signup">
            <div className="photos">
                <img src={model2} alt="img" className="img-register"/>
                <img src={behindPointsToModel2} alt="behinds Points" className="img-behindpoints2"/>
            </div>

            <div className="form-contain">
                <form action="" className="">
                    <h1 className="title-signup">Registrate</h1>
                    <div className="inputs">
                        <div className="labels">
                            <label className="label-name">Nombre</label>
                            <input type="text" name="name" className="name" placeholder="Nombre y Apellidos"/>
                        </div>
                            
                        <div className="labels">
                            <label className="label-email">E-mail</label>
                                <input type="email" name="email" className="email" placeholder="tu@correo.com"/>
                        </div>
                        
                        <div className="labels">
                            <label className="label-pass">Contraseña</label>
                            <input type="password" name="password" className="pass" placeholder="*****************"/>
                        </div>

                        <div className="labels">
                            <label className="label-pass">confirmar Contraseña</label>
                            <input type="password" className="pass" placeholder="*****************"/>
                        </div>
                    </div>

                    <button className="btn-signup">Registrarme</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
