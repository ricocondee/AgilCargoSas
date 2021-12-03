import React from 'react';
import '../styles/Home.css'
import model1 from '../assets/model1.png';

const Home = () => {
    return (
        <div className="all-contain">
            <div className="call-to-action">
                <h1 className="">Los envios mas rapidos y seguros del mercado.</h1>
                <p className="">Tenemos el personal mas calificado para la recogida, transporte y entrega de tus envios.</p>
                <strong className="h2">¡Estamos a cargo!</strong>
                <button className="my-button">Ven por mi producto</button>
            </div>
            <div className="my-img-contain">
                <img src={model1} alt="Modelo sonriendo y saludando" className="my-img" />
            </div>
        </div>
    );
}

export default Home;