import React from 'react';

var selectComponent = "";

if (window.location.href.indexOf('/order') !== -1) {
    selectComponent = "select-order-first"
}

if (window.location.href.indexOf('/budget') !== -1) {
    selectComponent = "vehicles"
}

const SelectVehicles = () => {
    return (
        <select name={selectComponent} className={selectComponent} id={selectComponent}>
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
    );
}

export default SelectVehicles;