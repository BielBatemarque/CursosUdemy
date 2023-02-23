import { createContext, useContext, useState } from "react";

export const initialState = {
    counter: 0,
    loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
    const [state, dispacht] = useState(initialState);

    return(
        <Context.Provider value={[state, dispacht]}>{children}</Context.Provider>
    );
};

export const useCounterContext = () => {
    const context = useContext(Context);
    if(typeof context === 'undefined'){
        throw new Error('you have to use useCounterContext inside <CounterContextProvider />');
    }

    return [...context];
};