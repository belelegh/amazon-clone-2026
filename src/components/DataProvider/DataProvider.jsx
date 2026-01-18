import { createContext, useReducer } from "react";
// import { initialState, reducer } from "../../utility/reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};






// import { createContext, useReducer } from "react";
// import reducer, { initialState } from "./reducer";

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <DataContext.Provider value={[state, dispatch]}>
//       {children}
//     </DataContext.Provider>
//   );
// };

export default DataProvider;

// import React, { createContext, useReducer } from "react";
// import reducer, { initialState } from "./reducer";
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
