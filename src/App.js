import React from 'react'
import './App.css';
import './examples/examplesStyle.css';
import StateHook from './examples/stateHookExample';
import EffectHook from './examples/useEffectExample';
import RefHook from './examples/useRefExample';
import MemoHook from './examples/useMemoExample';
import CallbackHook from './examples/useCallbackExample';
import ContextHook from './examples/useContextExample'
import MyHook from './examples/myHook'

function App() {
    return (
    <div className="App">
        <EffectHook />
        <StateHook />
        <RefHook />
        <MemoHook />
        <CallbackHook />
        <ContextHook />

        <MyHook />
    </div>
    );
}

export default App;
