/**
 * Вспомогательный компонент, который принимает колбэк-функцию
 */

import React, {useEffect, useState} from 'react'

export default function Something({callbackRequest}) {
    const [someText, setSomeText] = useState();

    useEffect(() => {
        const getSomething = callbackRequest(13); // т.к. мы получили именно функцию, можем вызвать ее со своим значением
        setSomeText(getSomething);              // метод изменения стейта - проп функция-коллбэк, которая вернет значение
    }, [callbackRequest]);

    return (
        <div>
            <p className='green darken-2' style={{padding: '2px', width: '240px', textAlign: 'center'}}>{someText}</p>
        </div>
    );
}
