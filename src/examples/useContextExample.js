/**
 * Хук useContext позволяет избежать передачу props в дочерние компоненты
 */

import React, {useState} from 'react'
import ContextContainer from './notImportant/containerForContext'
import Alert from './notImportant/alertForContext'

//создаем обертку-контекст для дочерних элементов
export const AlertContext = React.createContext();

function ContextHook() {
    // состояние алерта, по-ум. false
    const [alert, setAlert] = useState(false);

    // метод для переключение алерта
    const toggleAlert = () => setAlert(prev => !prev);

    return (
        // тип контекста - провайдер, т.к. это родительский компонент, который предоставляет состояние
        <AlertContext.Provider value={alert}>
            <div className="App-center" style={{marginTop: '-30px'}}>
                <p style={{ fontSize: '18px', color: '#e6ee9c' }}>Муха - это маленькая птица</p>
                <ContextContainer toggle={toggleAlert}/>
                <Alert />
            </div>
        </AlertContext.Provider>
    );
}

export default ContextHook;
