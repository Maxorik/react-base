/**
 * Хук useState используется для хранения и изменения данных
 */

import React, {useState} from 'react'
import Button from '@material-ui/core/Button';

function StateHook() {
    const [number, setNumber] = useState(() => {   // первоначальное значение, м.б. рассчитано или получено
        return Math.trunc(Math.random() * 20);
    });

    // disable кнопки (класса) если значение меньше 0
    let btnClass = 'btn cyan';
    if (number < 0) {
        let disClass = btnClass.split(' ');
        disClass.push('disabled');
        btnClass = disClass.join(' ');
    }

    // изменение стора
    function incr() {
        setNumber(prev => prev + 20);      // изменение state через колбэк, меняем не сам стейт, а предыдущее значение
    }
    function decr() {
        setNumber(number - 20);
    }
    function setRandNumber() {
        setNumber(Math.trunc(Math.random() * 40));
    }

    return (
    <div>
        <div className="App-center">
            <p className="App-link" style={{fontSize: '33px', margin: '10px'}}>     {/* inline стили */}
                {number}
            </p>
            <div className="mainContainer">
                <button className="waves-effect waves-light btn" onClick={incr}>plus</button>
                <Button variant="contained" color="primary" className={btnClass} onClick={decr}>minus</Button>  {/* material UI */}
                <Button variant="contained" color="primary" className="red" onClick={setRandNumber}>random</Button>  {/* material UI */}
            </div>
        </div>
    </div>
    );
}

export default StateHook;
