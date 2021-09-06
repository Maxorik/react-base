/**
 * Вспомогательный компонент для хука useContext - кнопка вызова алерта
 */

import React, {useEffect, useRef, useState} from 'react'

export default function ContextContainer({toggle}) {
    const [hidden, setHidden] = useState(true);
    let hideTitle = useRef('Показать');

    useEffect(() => {
        hideTitle.current = hidden ? 'Скрыть' : 'Показать'
    }, [hidden]);

    const buttonHandler = () => {
        toggle();
        setHidden(prev => !prev);
    };

    return (
        <div>
            <button
                className="waves-effect waves-light btn"
                style={{color: '#000', fontWeight: 'bold'}}
                onClick={buttonHandler}
            >{hideTitle.current} девушку</button>
        </div>
    );
}
