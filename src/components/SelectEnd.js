import React from 'react';

var selectComponent = "";

if (window.location.href.indexOf('/order') !== -1) {
    selectComponent = "select-order-first"
}

if (window.location.href.indexOf('/budget') !== -1) {
    selectComponent = "end-point"
}

const Select = () => {
    return (
        <select name={selectComponent} className={selectComponent} id={selectComponent}>
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
    );
}

export default Select;