import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const P = () => {
    const theContext = useContext(GlobalContext);
    const { contextState: { body, counter }, setState } = theContext;
    return(
      <p onClick={() => setState((s) => ({...s, counter: s.counter + 1 }))}>{body} {counter}</p>
  
    );
  }