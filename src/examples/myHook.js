/**
 * Пример кастомного хука
 */

import React, {useState} from 'react'

// кастомный хук для обработки инпутов
function useInput(oldValue) {
    const [value,setValue] = useState(oldValue);

    const onChange = event => {
        setValue(event.target.value);
    };

    // функция очистки
    const clear = () => setValue('');

    return {
        bind: {value, onChange},    // базовые аттрибуты обычного инпута
        value,
        clear                       // кастомный метод
    }
}

function MyHook() {
    const name = useInput('Petr');
    const lastName = useInput('Gabrielevski');

    return (
        <div className="App-center">
            <div>
                <input type='text' style={{width: '200px'}} {...name.bind}/>
                <button className="waves-effect waves-light btn pink darken-4" style={{width: '40px'}} onClick={() => name.clear()}>x</button>
            </div>
            <div>
                <input type='text' style={{width: '200px'}} {...lastName.bind}/>
                <button className="waves-effect waves-light btn pink darken-4" style={{width: '40px'}} onClick={() => lastName.clear()}>x</button>
            </div>
        </div>
    );
}

export default MyHook;
