import React, { createContext, useReducer } from 'react';
import { cardReducer } from '../Reducers/cardReducer';

const cardContext = createContext();


const CardContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(cardReducer, []);

   return (
      <cardContext.Provider value={{ state, dispatch }}>
         {children}
      </cardContext.Provider>
   )
}

export { CardContextProvider, cardContext };
