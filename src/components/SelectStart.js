import React from 'react';

var selectComponent = "";

if (window.location.href.indexOf('/order') !== -1) {
    selectComponent = "select-order-first";
}

if (window.location.href.indexOf('/budget') !== -1) {
    selectComponent = "start-point";
}

const Select = () => {
    return (
        <select name={selectComponent} className={selectComponent} id={selectComponent}>
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
    );
}

export default Select;