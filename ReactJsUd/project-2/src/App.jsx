import {  useState, useRef, useEffect } from 'react';
import './App.css';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      cb();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [conter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  
  useMyHook(() => setCounter((c) => c + 1), delay);
  return(
    <div> 
      <h1> contador: {conter} </h1>
      <h1> delay: {delay} </h1>
      <button onClick={() => {setDelay(d => d + incrementor)}}>+{incrementor}</button>
      <button onClick={() => {setDelay(d => d - incrementor)}}>-{incrementor}</button> <br />
      <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))} />
    </div>
    );
}

export default App;