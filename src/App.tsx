import React from 'react';
import './App.css';
import UseStateComponent from './components/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import CustomHookComponent from './components/CustomHookComponent';
import TestComponent from './components/MoreReactComponent';

function App() {
  return (
  <div className='App'>
    <div className='item'>
    <h1>useState </h1>
      <UseStateComponent/>
    </div>
      <div className='item'>
      <h1>useEffect</h1>
      <UseEffectComponent/>
      </div>
      <div className='item'>
      <h1>useContext</h1>
      <UseContextComponent/>
      </div>
      <div className='item'>
      <h1>useReducer</h1>
      <UseReducerComponent/>
      </div>
      <div className='item'>
      <h1>useRef</h1>
      <UseRefComponent/>
      </div>
      <div className='item'>
      <h1>More react stuff</h1>
      <TestComponent/>
      </div>
      <div className='item'>
    <h1>custom hook</h1>
      <CustomHookComponent/>
    </div>
    </div>
  );
}

export default App;
