import './App.css';
import { useState,useEffect } from 'react';

const eventfn = () => { 
  console.log('h1 clickado')
}

function App() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

// componentDidUpdate - executa toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

//componentDidMount - executa 1x
  useEffect(() => {
    console.log('componentDidMount');
}, []);

//componentWillAmount - limpeza quando desmontar o componente
useEffect(() => {
  document.querySelector('h1')?.addEventListener('click', eventfn);
  return () => {
    document.querySelector('h1')?.removeEventListener('click', eventfn);
  }
}, []);


//com dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
  console.log('c1', counter, 'c2', counter2);
}, [counter, counter2]);


  return (
      <div className="App">
        <h1>contador1: {counter}, contador2: {counter2}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
     </div>   
  );
}

export default App;
