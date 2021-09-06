/**
 * Хук useCallback используется, если нужно вызвать функцию при изменении определенного параметра. В отличии от useMemo,
 * он возвращает не значение, а саму функцию - которую можно будет передать дальше и выполнить
 */

import React, {useCallback, useState} from 'react'
import Something from './notImportant/somethingForCallback'  // компонент, который примет коллбэк-функцию

function CallbackHook() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'pink' : 'gray',
        fontSize: '16px'
    };

    // функция для коллбэка
    // колбэк вызовется при изменении параметра colored. Это может быть GET-запрос, например, получить запись № {count}
    const myCallbackFunc = useCallback((somethingNumber) => {
        return (count * 0.3 + Math.random() * somethingNumber).toFixed(3) + ' %';
    }, [count]);

    return (
        <div className="App-center">
            <div className="mainContainer">
                <p className='pContainer darkred-text darken-1' style={styles}>Все будет хорошо</p>
                <button
                    className="waves-effect waves-light btn light-green accent-2"
                    style={{width: '115px', color: '#000'}}
                    onClick={() => { setColored(prev => !prev) }}
                >good button</button>
            </div>
            <div className="mainContainer">
                <p className='pContainer darkred-text darken-1'>{count}</p>
                <button
                    className="waves-effect waves-light btn lime accent-2"
                    style={{width: '115px', color: '#000'}}
                    onClick={() => { setCount(prev => prev + 2) }}
                >pip</button>
            </div>

            {/* передали колбэк-функцию в другой компонент */}
            <Something callbackRequest={myCallbackFunc} />
        </div>
    );
}

export default CallbackHook;
