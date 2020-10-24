import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js'

function App() {
  return (
    <div>
      <div className="App">
        <h1>Plants</h1>
        <Button text="WATER PLANTS" data="water" />
        <p></p>
        <Button text="check connection" data="" />
      </div>
    </div>
  );
}

export default App;
