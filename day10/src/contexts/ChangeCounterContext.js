import React, { createContext, useContext, useMemo, useReducer } from 'react';

// export const ChangeCounterContext = createContext()

const initalState = { count : 0 }
const reducer = (state, action) => {
    switch(action.type){
        case 'RESET' : 
            return initalState
        case 'INCREMENT' : 
            return {
                count : state.count + 1
            }
        case 'DECREMENT' : 
            return {
                count : state.count - 1
            }
        default : 
            return state
    }
}


const ChangeCounterContext = createContext()
export const useCounter = () => useContext(ChangeCounterContext)

const ChangeCounterProvider = ({children}) => {

    const [ userStore, userDispatch] = useReducer(reducer, initalState)

    const value = useMemo(() => ({userStore, userDispatch}),[userStore, userDispatch])

    return (
        <ChangeCounterContext.Provider value={value}>
            {children}
        </ChangeCounterContext.Provider>
    );
};

export default ChangeCounterProvider;