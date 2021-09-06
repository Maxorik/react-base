/**
 * Хук useEffect вызывается при каждом рендере, когда меняется state для переменной (если она указана)
 */

import React, {useState, useEffect} from 'react'

function EffectHook() {
    const [mouse, setMousePos] = useState({
        x: 0,
        y: 0
    });

    // вызывается при каждом рендере, когда меняется state для mouse. Можно сделать GET-запрос напр.
    useEffect(() => {
        // fetch ('https://api.site.com/${position}').then(res => res.json()).then(json => setData(json))   --- обратились к апи конкретного position и вывели данные
        // console.log('Mouse position was changed to ' + mouse.x + ' ' + mouse.y);
    }, [mouse]);     // вызывается, только если изменилось [mouse, setMousePos]  // [mouse] - необязательный параметр

    // вызовется всего один раз при первом рендеринге, т.к. второй параметр не существует []
    useEffect(() => {
        window.addEventListener('mousemove', event => {
            setMousePos({
                x: event.clientX,
                y: event.clientY
            })
        })
    }, []);

    return (
    <div className="centerContainer">
        <p className="App-link">
            Вы находитесь здесь:
            <span className="orange-text darken-1"> {mouse.x} {mouse.y} </span>
        </p>
    </div>
    );
}

export default EffectHook;
