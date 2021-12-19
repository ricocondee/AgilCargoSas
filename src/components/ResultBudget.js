import React from 'react';

const ResultBudget = () => {
    return (
        <div className="result-budget-container">
                <div className="result">
                    <h1 className="title-result">Cotizacion</h1>
                    <input type="text" className="for-read-only" placeholder="Destino: Bogot&aacute;" readOnly />
                    <i className="bi bi-geo icon-left-one"></i>
                    <input type="text" className="for-read-only" placeholder="Origen: Barranquilla" readOnly />
                    <i className="bi bi-geo-alt icon-right-one"></i>
                    <input type="text" className="for-read-only" placeholder="Tiempo estimado: 42hrs" readOnly />
                    <i className="bi bi-reception-0 icon-left-two"></i>
                    <input type="text" className="for-read-only" placeholder="Distancia: 1008km" readOnly />
                    <i className="bi bi-truck icon-left-tree"></i>
                    <input type="text" className="for-read-only" placeholder="Total: $ 10.700" readOnly />
                    <i className="bi bi-clock icon-right-two"></i>
                    <input type="text" className="for-read-only" placeholder="Vehiculos: 1" readOnly />
                    <i className="bi bi-cash-coin icon-right-tree"></i>
                    <button className="btn-agendar">Agendar</button>
                </div>
            </div>
    );
}

export default ResultBudget;