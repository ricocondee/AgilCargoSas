import React from 'react';
import '@styles/Home.css'
import model1 from '@assets/model1.png';
import puntosVertical from '@assets/puntosVertical.svg';
import puntosHorizontal from '@assets/puntosHorizontal.svg';

const Home = () => {
    return (
        <div className="all-contain">
            <div className="call-to-action">
                <h1 className="title">Los envios mas rapidos y seguros del mercado.</h1>
                <p className="texto-fill">Tenemos el personal mas calificado para la recogida, transporte y entrega de tus envios.</p>
                <p className="strong">¡Estamos a cargo!</p>
                <button className="my-button">Ven por mi producto</button>
            </div>
            <div className="my-img-contain">
                <img src={puntosVertical} className="pun-vertical"/>
                <img src={model1} alt="Modelo sonriendo y saludando" className="my-img" />
                <img src={puntosHorizontal} className="pun-horizontal"/>
            </div>
        </div>
    );
}

export default Home;