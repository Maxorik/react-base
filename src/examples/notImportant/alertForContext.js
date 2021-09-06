/**
 * Вспомогательный компонент для хука useContext - всплывающее сообщение
 */

import React, {useContext} from 'react'
import image from './tyan.png';
import {AlertContext} from '../useContextExample' // импортировали контекст из родительского файла

export default function Alert() {
    const alert = useContext(AlertContext);

    // показать либо скрыть алерт
    if(!alert) return null;

    return (
        <div>
            <img src={image} style={{marginTop: '5px'}}/>
        </div>
    )
}
