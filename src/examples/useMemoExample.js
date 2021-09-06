/**
 * Хук useMemo используется для кеширования, чтобы не вызывать функцию, если перендеринг произошел без ее участия
 */

import React, {useMemo, useState} from 'react'
// import Button from '@material-ui/core/Button';

function countAllPeople(something, book) {
    let list = 1;
    while (list < 10000) list++;

    console.log('very long thing');

    return something + book;
}

const smallBtn = {
    width: '60px',
    marginLeft: '3px'
};

function MemoHook() {
    const [book, setBook] = useState(100);
    const [something, setSomething] = useState(42);

    // функция вызовется только если перерендеринг был из-за изменения переменной book (при изменении something рендер произойдет, но фунцкия не вызовется)
    const countBook = useMemo(() => {
       return countAllPeople(something, book);
    }, [book]);

    function incrBook() {
        setBook(prev => prev + 20);
    }

    function changeSomething() {
        setSomething(1 + something * Math.trunc(Math.random() * 23 / 7));
    }

    return (
        <div className="App-center">
            <div className="mainContainer">
                <p className='pContainer green-text darken-1'>{book}</p>
                <p className='pContainer orange-text darken-1'>{something}</p>
                <p className='pContainer green-text darken-1'>{countBook}</p>
                <button className="waves-effect waves-light btn green" style={smallBtn} onClick={incrBook}>&#10004;</button>
                <button className="waves-effect waves-light btn red" style={smallBtn} onClick={changeSomething}>&#10006;</button>
            </div>
        </div>
    );
}

export default MemoHook;
