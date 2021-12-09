import React from 'react';

const ResultBudget = () => {
    return (
        <div className="result-budget-container">
                <div className="result">
                    <h1 className="title-result">Cotizacion</h1>
                    <input type="text" className="for-read-only" placeholder="Destino:" readOnly />
                    <i className="bi bi-geo icon-left-one"></i>
                    <input type="text" className="for-read-only" placeholder="Origen:" readOnly />
                    <i className="bi bi-geo-alt icon-right-one"></i>
                    <input type="text" className="for-read-only" placeholder="Tiempo estimado:" readOnly />
                    <i className="bi bi-reception-0 icon-left-two"></i>
                    <input type="text" className="for-read-only" placeholder="Distancia:" readOnly />
                    <i className="bi bi-truck icon-left-tree"></i>
                    <input type="text" className="for-read-only" placeholder="Total:" readOnly />
                    <i className="bi bi-clock icon-right-two"></i>
                    <input type="text" className="for-read-only" placeholder="Vehiculos:" readOnly />
                    <i className="bi bi-cash-coin icon-right-tree"></i>
                    <button className="btn-agendar">Agendar</button>
                </div>
            </div>
    );
}

export default ResultBudget;