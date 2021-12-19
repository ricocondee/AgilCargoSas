import React from 'react';
import model4 from '@assets/model4.png'
import '@styles/Track.css'
import VerticalPoints from '@assets/puntosVertical.svg'
import HorizontalPoints from '@assets/puntosHorizontal.svg'


const Track = () => {
    return (
        <section className="all-track-container">
            <div className="track-search-container">
                <form action="/track">
                    <h1 className="title-track">¿Quieres saber donde est&aacute; tu env&iacute;o?</h1>
                    <input type="number" className="campo-track" placeholder="Ingresa el n&uacute;mero de gu&iacute;a de tu env&iacute;o." />
                    <i className="bi bi-search"></i>
                    <input type="submit" className="btn-track" name="btn-track" id="btn-track" value="Rastrear" />
                </form>
            </div>

            <div className="model4-container">
                <img src={VerticalPoints} className="vertical-points" />
                <img src={model4} className="model4" />
                <img src={HorizontalPoints} className="horizontal-points" />
            </div>
        </section>
    );
}

export default Track;