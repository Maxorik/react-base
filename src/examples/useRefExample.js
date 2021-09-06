/**
 * Хук useRef это аналог useState, для изменения переменной без перерендеринга. Также по нему можно обращаться к dom
 */

import React, {useRef, useEffect, useState} from 'react'
import Button from "@material-ui/core/Button";

function RefHook() {
    const inputRef = useRef(null);        // используем референс, чтобы обозначить дом-элемент
    const oldValue = useRef('ʕ•ᴥ•ʔ');        // используем референс, чтобы запомнить предыдущее значение
    const [inputValue, setValue] = useState('Hello');

    const focus = () => inputRef.current.focus();  // поставить фокус на дом-объект

    useEffect(() => {
        oldValue.current = inputValue;
    }, [inputValue]);

    function changeValue(e) {
        setValue(e.target.value)
    }

    return (
        <div>
            <div className="whiteBox">
                <input
                    style={{width: '100px'}}
                    ref = {inputRef}                       // имя референса
                    value = {inputValue}
                    onChange = {changeValue}
                />
                <Button variant="contained" color="primary" onClick={focus}>Get my hello</Button>
            </div>
            <p className="App-link pContainer">А раньше было <span className="orange-text darken-1">{oldValue.current}</span></p>
        </div>
    );
}

export default RefHook;
