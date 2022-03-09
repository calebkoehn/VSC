import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [ boxColor, setboxColor ]  = useState([])
  return (
    <div className="App">
      <h1>Color Box Generator</h1>
      <Form boxColor={ boxColor } setboxColor={ setboxColor} />
      <Display boxColor={ boxColor } />
    </div>
  );
}

export default App;
