import React, { createContext, useContext, useReducer } from 'react';


const initalState = {
    isChk : false
}

const reducer = (state, action) => {
    const {type} = action
    switch(type){
        case 'TRUE' : 
            return{ 
                //기존 초기값은 들고오고 특정값만 바꿔준다.
                ...state, 
                isChk : true 
            }

        case 'FALSE' : 
            return{ 
                ...state,
                isChk : false
            }

        case 'TOGGLE' : 
            return{ 
                ...state,
                isChk : !state.isChk 
            }

        default :
            return state
    }

}

const ToggleContext = createContext( initalState )
export const useUserToggle = () => useContext(ToggleContext)


const ToggleProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer,initalState)
    return (
        <ToggleContext.Provider value={{state, dispatch}}>
            {children}
        </ToggleContext.Provider>
    );
};

export default ToggleProvider;