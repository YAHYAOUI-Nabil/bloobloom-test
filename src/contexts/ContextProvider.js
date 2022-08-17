import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();


export const ContextProvider = ({children}) => {
    const [collectionsName, setCollectionsName] = useState('SPECTACLES WOMEN');
    
    return (
        <StateContext.Provider value={{collectionsName, setCollectionsName}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);