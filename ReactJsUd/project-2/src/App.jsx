import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

function App() {
    const [reverse, setReverse] = useState(false);
    const reverseClasse = reverse ? 'reverse' : '';
    const [counter, setCounter] = useState(0)

 const handleClick = () => {
    setReverse(!reverse);
  };
  const handleIncrement = () => {
    setCounter((c) => c + 1);
  };

  return (
      <div className="App">
       <header className="App-header">
         <img src={logo} className={`App-logo ${reverseClasse}`} alt="logo" />

          <h1>Contador: {counter}</h1>

         <button type='button' onClick={handleClick}>Reverse {reverseClasse}</button>
          <br />
         <button onClick={handleIncrement}>Somar</button>
       </header>
     </div>   
  );
}

export default App;
