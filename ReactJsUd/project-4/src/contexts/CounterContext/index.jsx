import { createContext, useContext, useReducer, useRef } from "react";
import { buildActions } from "./build-actions";
import { reducer } from "./reducer";

export const initialState = {
    counter: 0,
    loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
    const [state, dispacht] = useReducer(reducer, initialState);
    const actions = useRef(buildActions(dispacht));

    return(
        <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>
    );
};

export const useCounterContext = () => {
    const context = useContext(Context);

    if(typeof context === 'undefined'){
        throw new Error('you have to use useCounterContext inside <CounterContextProvider />');
    }

    return [...context];
};