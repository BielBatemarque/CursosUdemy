import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo que contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch(action.type){
    case 'muda':
      console.log('chamou muda com ', action.payload);
      return {...state, title: action.payload};
    case 'inverter':
      console.log('chamou inverter');
      const { title }= state;
      return {...state, title: title.split('').reverse().join('')};
  }

  console.log('NENHUMA ACTION ENCONTRADA');
  return {...state};
}

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const {counter, title, body} = state;

  return(
    <div>
      <h1>{title} {counter}</h1>
      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-br')}) }>Muda</button>
      <button onClick={() => dispatch({ type: 'inverter' }) }>inverter</button>
      <button onClick={() => dispatch({ type: 'qualquer coisa'}) }>chama</button>
    </div>
  );
}

export default App;