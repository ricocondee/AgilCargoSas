import React from 'react';
import model3 from '@assets/model3.png'
import pointV from '@assets/puntosVertical.svg'
import pointH from '@assets/puntosHorizontal.svg'
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
                <form action="/order" className="order-form">
                    <input type="text" name="namesDest" className="select-order-first imput" placeholder="Nombres y apellidos del destinatario" />
                    <select name="documentType" id="" className="select-order-first">
                        <option value="" selected>Seleccciona tu tipo de documento</option>
                        <option value="">CC: Cedula de Ciudadania</option>
                    </select>
                    <input name="document" type="number" className="select-order-first imput" placeholder="ingresa tu numero de documento" maxLength={10} />
                    <select name="startPoint" className="select-order-first" id="start-point">
                        <option selected>Seleccionar punto de origen</option>
                        <option id="arauca-start">Arauca</option>
                        <option id="armenia-start">Armenia</option>
                        <option id="barranquilla-start">Barranquilla</option>
                        <option id="bogota-start">Bogot&aacute;</option>
                        <option id="bucaramanga-start">Bucaramanga</option>
                        <option id="cali-start">Cali</option>
                        <option id="cartagena-start">Cartagena</option>
                        <option id="cucuta-start">C&uacute;cuta</option>
                        <option id="florencia-start">Florencia</option>
                        <option id="ibague-start">Ibagu&eacute;</option>
                        <option id="leticia-start">Leticia</option>
                        <option id="manizales-start">Manizales</option>
                        <option id="medellin-start">Medell&iacute;n</option>
                        <option id="mitu-start">Mit&uacute;</option>
                        <option id="mocoa-start">Mocoa</option>
                        <option id="monteria-start">Monter&iacute;a</option>
                        <option id="neiva-start">Neiva</option>
                        <option id="pasto-start">Pasto</option>
                        <option id="pereira-start">Pereira</option>
                        <option id="popayan-start">Popay&aacute;n</option>
                        <option id="puerto-carreno-start">Puerto Carreño</option>
                        <option id="puerto-inirida-start">Puerto In&iacute;rida</option>
                        <option id="quibdo-start">Quibd&oacute;</option>
                        <option id="riohacha-start">Riohacha</option>
                        <option id="san-andres-start">San Andr&eacute;s</option>
                        <option id="san-jose-del-guaviare-start">San Jos&eacute; del Guaviare</option>
                        <option id="santa-marta-start">Santa Marta</option>
                        <option id="sincelejo-start">Sincelejo</option>
                        <option id="tunja-start">Tunja</option>
                        <option id="valledupar-start">Valledupar</option>
                        <option id="villavicencio-start">Villavicencio</option>
                        <option id="yopal-start">Yopal</option>
                    </select>
                    <select name="endPoint" className="select-order-first" id="end-point">
                        <option selected>Seleccionar punto de destino</option>
                        <option id="arauca-end">Arauca</option>
                        <option id="armenia-end">Armenia</option>
                        <option id="barranquilla-end">Barranquilla</option>
                        <option id="bogota-end">Bogot&aacute;</option>
                        <option id="bucaramanga-end">Bucaramanga</option>
                        <option id="cali-end">Cali</option>
                        <option id="cartagena-end">Cartagena</option>
                        <option id="cucuta-end">C&uacute;cuta</option>
                        <option id="florencia-end">Florencia</option>
                        <option id="ibague-end">Ibagu&eacute;</option>
                        <option id="leticia-end">Leticia</option>
                        <option id="manizales-end">Manizales</option>
                        <option id="medellin-end">Medell&iacute;n</option>
                        <option id="mitu-end">Mit&uacute;</option>
                        <option id="mocoa-end">Mocoa</option>
                        <option id="monteria-end">Monter&iacute;a</option>
                        <option id="neiva-end">Neiva</option>
                        <option id="pasto-end">Pasto</option>
                        <option id="pereira-end">Pereira</option>
                        <option id="popayan-end">Popay&aacute;n</option>
                        <option id="puerto-carreno-end">Puerto Carreño</option>
                        <option id="puerto-inirida-end">Puerto In&iacute;rida</option>
                        <option id="quibdo-end">Quibd&oacute;</option>
                        <option id="riohacha-end">Riohacha</option>
                        <option id="san-andres-end">San Andr&eacute;s</option>
                        <option id="san-jose-del-guaviare-end">San Jos&eacute; del Guaviare</option>
                        <option id="santa-marta-end">Santa Marta</option>
                        <option id="sincelejo-end">Sincelejo</option>
                        <option id="tunja-end">Tunja</option>
                        <option id="valledupar-end">Valledupar</option>
                        <option id="villavicencio-end">Villavicencio</option>
                        <option id="yopal-end">Yopal</option>
                    </select>
                    <select name="vehicles" className="select-order-first" id="vehicles">
                        <option selected>Vehiculos a usar</option>
                        <option id="vehicle-one">1</option>
                        <option id="vehicle-two">2</option>
                        <option id="vehicle-tree">3</option>
                        <option id="vehicle-four">4</option>
                        <option id="vehicle-five">5</option>
                        <option id="vehicle-six">6</option>
                        <option id="vehicle-seven">7</option>
                        <option id="vehicle-eight">8</option>
                        <option id="vehicle-nine">9</option>
                        <option id="vehicle-ten">10</option>
                    </select>
                    <input type="text" className="select-order-first imput" id="datetime" name="datetime" min="2021-01-01T00:00" max="2030-12-31T00:00" onClick={changeType} placeholder="Fecha y hora de recogida" />
                    <select name="paymentMethod" id="" className="select-order-first">
                        <option value="" selected>Metodo de pago</option>
                        <option value="">Efectivo: pago en el lugar</option>
                    </select>
                    <input type="submit" className="btn-order" name="btn-order" id="btn-order" value="Solicitar" />
                </form>
            </div>
            <div className="order-images-container">
                <img src={model3} alt="" className="model3-order" />
                <img src={pointV} alt="" className="pointV-order" />
                <img src={pointH} alt="" className="pointH-order" />
            </div>
        </section>
    );
}

export default Order;