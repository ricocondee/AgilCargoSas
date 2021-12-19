import React, { useState } from 'react';
import model3 from '@assets/model3.png'
import pointV from '@assets/puntosVertical.svg'
import pointH from '@assets/puntosHorizontal.svg'
import ResultBudget from '@components/ResultBudget'
import '@styles/Budget.css'


const Budget = () => {

    const [result, setResult] = useState(false);
    const handleResult = () => {

        const id = document.getElementById("search-id")
        if (id.classList.contains("budget-search-container")) {
            id.classList.remove("budget-search-container")
            id.classList.add("none")
        }
        else {
            id.classList.add("budget-search-container")
            id.classList.remove("none")
        }
        setResult(!result);
    };

    return (
        <section className="all-budget-container">
            <div className="budget-search-container" id="search-id">
                <h1 className="title-budget"> Cotiza aqu&iacute; tu env&iacute;o</h1>
                <form action="/budget" method="" className="my-form" >
                    <select name="firstPoint" className="start-point" id="start-point">
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
                    <select name="lastPoint" className="end-point" id="end-point">
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
                    <select name="vehiclesBudget" className="vehicles" id="vehicles">
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
                    <input type="submit" className="btn-budget" name="btn-budget" id="btn-budget" value="Cotizar" />
                </form>
            </div>
            <img src={model3} alt="" className="model3" onClick={handleResult} />
            <img src={pointV} alt="" className="pointV" />
            <img src={pointH} alt="" className="pointH" />
            {result && <ResultBudget />}
        </section>
    );
}

export default Budget;