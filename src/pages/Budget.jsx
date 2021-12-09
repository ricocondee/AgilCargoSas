import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import model3 from '@assets/model3.png'
import pointV from '@assets/puntosVertical.svg'
import pointH from '@assets/puntosHorizontal.svg'
import ResultBudget from '@components/ResultBudget'
import SelectStart from '@components/SelectStart'
import SelectEnd from '@components/SelectEnd'
import Button from '@components/Button'
import SelectVehicles from '@components/SelectVehicles'
import '@styles/Budget.css'


const Budget = () => {

    const [result, setResult] = useState(false);
    const handleResult = () => {

        const id = document.getElementById("search-id")
        if (id.classList.contains("budget-search-container")) {
            id.classList.remove("budget-search-container")
            id.classList.add("none")
        }
        else{
            id.classList.add("budget-search-container")
            id.classList.remove("none")
        }
        setResult(!result);
    };

    return (
        <section className="all-budget-container">
            <div className="budget-search-container" id="search-id">
                <h1 className="title-budget"> Cotiza aqu&iacute; tu env&iacute;o</h1>
                <form action="" method="" className="my-form" >
                    <SelectStart/>
                    <SelectEnd/>
                    <SelectVehicles/>
                    <Button/>
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