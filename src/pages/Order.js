import React from 'react';
import model3 from '@assets/model3.png'
import pointV from '@assets/puntosVertical.svg'
import pointH from '@assets/puntosHorizontal.svg'
import SelectStart from '@components/SelectStart'
import SelectEnd from '@components/SelectEnd'
import SelectVehicles from '@components/SelectVehicles'
import Button from '@components/Button'
import '@styles/Order.css';

const Order = () => {

    function changeType() {
        if (document.getElementById('datetime').focus) {
            var entry = document.getElementById("datetime");
            entry.type = "datetime-local";
        }

        else {
            var entry = document.getElementById("datetime");
            entry.type = "text";
        }
    }

    return (
        <section className="all-order-container">
            <div className="order-container">
                <h1 className="title-order">Solicitar recogida de tu envio</h1>
                <form action="" className="order-form">
                   <input type="text" className="select-order-first imput" placeholder="Nombres y apellidos del destinatario"/>
                   <select name="" id="" className="select-order-first">
                    <option value="" selected>Seleccciona tu tipo de documento</option>
                    <option value="">CC: Cedula de Ciudadania</option>
                    </select>
                    <input type="number" className="select-order-first imput"  placeholder="ingresa tu numero de documento" maxLength={10}/>
                    <SelectStart />
                    <SelectEnd />
                    <SelectVehicles />
                    <input type="text" className="select-order-first imput" id="datetime" name="datetime" min="2021-01-01T00:00" max="2030-12-31T00:00" onClick={changeType} placeholder="Fecha y hora de recogida"/>
                    <select name="" id="" className="select-order-first">
                    <option value="" selected>Metodo de pago</option>
                    <option value="">Efectivo: pago en el lugar</option>
                    </select>
                    <Button/>
                </form>
            </div>
            <div className="order-images-container">
                <img src={model3} alt="" className="model3-order"/>
                <img src={pointV} alt="" className="pointV-order"/>
                <img src={pointH} alt="" className="pointH-order"/>
            </div>
        </section>
    );
}

export default Order;