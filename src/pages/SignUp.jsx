import React from "react";
import '../styles/SignUp.css';
import model2 from '../assets/model2.png';
import behindPointsToModel2 from "../assets/behindPointsToModel2.png";

const SignUp = () => {
    return (
        <div className="container-signup">
            <div className="photos">
                <img src={model2} alt="img" className="img-register"/>
                <img src={behindPointsToModel2} alt="behinds Points" className="img-register2"/>
            </div>

            <div>
                <form action="/hola" className="">
                    <h1>Registrate</h1>
                    <div className="inputs">
                        <label>
                            Nombre
                            <input type="text" name="name"/>
                        </label>

                        <label>
                            E-mail
                            <input type="email" name="email"/>
                        </label>
                        
                        <label>
                            Contraseña
                            <input type="password" name="password"/>
                        </label>

                        <label>
                            confirmar Contraseña
                            <input type="password" />
                        </label>
                    </div>

                    <button>Registrarme</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;