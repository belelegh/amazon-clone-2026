
import React, { createContext, useReducer } from "react";

// Create Context
export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;


// Components/DataProvider/DataProvider.jsx
// import React, { useReducer } from 'react';
// import {DataContext} from "./DataContext"

// export default function DataProvider({ children, reducer, initialState }) {
//   const [state, dispatch] = useReducer(reducer, initialState);
  
//   return (
//     <DataContext.Provider value={{ state, dispatch }}>
//       {children}
//     </DataContext.Provider>
//   );
// }


// import React, { createContext, useReducer } from "react";

// // Create Context
// export const DataContext = createContext();

// export const DataProvider = ({ children, reducer, initialState }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
  
//   return (
//     <DataContext.Provider value={{ state, dispatch }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataProvider;

