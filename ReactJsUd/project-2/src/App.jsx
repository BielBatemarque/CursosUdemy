import './App.css';
import React, { useContext, useState } from 'react';

const globalState ={
  title: 'O titulo que contexto',
  body: 'O body do contexto',
  counter: 0,
};
const GlobalContext = React.createContext();

const Div = () => {
  return(
    <>
    <H1 />
    <P />
    </>

  )
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { contextState: { title, counter } } = theContext;
  return(
    <h1>{title} {counter}</h1>
  );
}

const P = () => {
  const theContext = useContext(GlobalContext);
  const { contextState: { body, counter }, contextState, SetContextState } = theContext;
  return(
    <p onClick={() => SetContextState((s) => ({...s, counter: s.counter + 1 }))}>{body}</p>

  );
}

function App() {
  const [contextState, SetContextState] = useState(globalState);

  return(
    <GlobalContext.Provider value={{contextState, SetContextState}}>
      <Div/>
    </GlobalContext.Provider>
  )
}

export default App;