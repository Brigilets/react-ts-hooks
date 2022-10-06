import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateComponent from './components/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent';

function App() {
  return (
    <div>
      <h1>UseState </h1>
      <UseStateComponent/>
      <h1>UseEffect</h1>
      <UseEffectComponent/>
      <h1>UseContext</h1>
      <UseContextComponent/>
    </div>
  );
}

export default App;
