import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [ boxArray, setBoxArray ]  = useState([])
  return (
    <div className="App">
      <h1>Color Box Generator</h1>
      <Form boxArray={ boxArray } setBoxArray={ setBoxArray} />
      <Display boxArray={ boxArray } />
    </div>
  );
}

export default App;
