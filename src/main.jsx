// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import "./index.css";

// import App from "./App";
//  import { DataProvider } from "./Components/DataProvider/DataProvider";
// import reducer, { initialState } from "./utility/reducer";

// /*  DEFINE stripePromise BEFORE USING IT */
//  const stripePromise = loadStripe(
// /   "pk_test_51SeoaHK8CUr2zFOII7JzfxXacgcGMQrhU73AJq4lJsYFlg0LcMm2GGacy5A7UXjVWatRoWDqJagI0ltV9iGGInTc00676BhKIL"
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <DataProvider reducer={reducer} initialState={initialState}>
//       <Elements stripe={stripePromise}>
//         <App />
//       </Elements>
//     </DataProvider>
//   </BrowserRouter>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataProvider from "./components/DataProvider/DataProvider.jsx";
import ReactDom from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import { initialState, reducer } from "../src/Utility/reducer.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
