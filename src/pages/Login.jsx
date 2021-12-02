import React from 'react';

const Login = () => {
    return (
        <div className="container-fluid bg-secondary">
            <form action="form-floating mb-5 border-box">
                <h1>Iniciar Sesion</h1>
                <label className="form-label">Email</label>
                <input type="text" className="form-control" id="floatingInputValue" placeholder="tu@correo.com"/>
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="* * * * * * * *"/>
                <input type="submit" className="btn btn-success mt-3 mb-3 ps-5 pe-5 rounded-pill"/>
                <p>¿Olvidaste tu contraseña?</p>
                <button className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
}

export default Login;