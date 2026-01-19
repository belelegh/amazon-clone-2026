import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Result/Result";
import ProductDetails from "./Pages/ProductDetail/ProductDetail";
import Auth from "./Pages/Auth/Auth";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51SeoaHK8CUr2zFOII7JzfxXacgcGMQrhU73AJq4lJsYFlg0LcMm2GGacy5A7UXjVWatRoWDqJagI0ltV9iGGInTc00676BhKIL"
);

function Routings() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/auth" element={<Auth />} />

      {/* Layout wrapper */}
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default Routings;

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Landing from "./Pages/Landing/Landing";
// import Payment from "./Pages/Payment/Payment";
// import Orders from "./Pages/Orders/Orders";
// import Result from "./Pages/Results/Result";
// import Cart from "./Pages/Cart/Cart";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
// import Auth from "./Pages/Auth/Auth";

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/Auth" element={<Auth />} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Result />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />

//         {/* Add this catch-all route */}
//         <Route path="*" element={<Navigate to="/" replace />} />

//         {/* OR if you want to specifically handle the problematic path: */}
//         <Route
//           path="/%7Bamazon_clone%7D"
//           element={<Navigate to="/" replace />}
//         />
//         <Route path="/{amazon_clone}" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./Pages/Landing/Landing";

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/Auth" element={<Auth />} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Result />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;
// import { Routes, Route } from "react-router-dom";

// import Layout from "./Components/Layout/Layout";
// import Landing from "./Pages/Landing/Landing";
// import Payment from "./Pages/Payment/Payment";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";
// import ProductDetails from "./Pages/ProductDetails/ProductDetails";
// import Auth from "./Pages/Auth/Auth";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51SeoaHK8CUr2zFOII7JzfxXacgcGMQrhU73AJq4lJsYFlg0LcMm2GGacy5A7UXjVWatRoWDqJagI0ltV9iGGInTc00676BhKIL"
// );

// function Routings() {
//   return (
//     <Routes>
//       {/* Public */}
//       <Route path="/auth" element={<Auth />} />

//       {/* Layout wrapper */}
//       <Route element={<Layout />}>
//         <Route path="/" element={<Landing />} />
//         <Route
//           path="/payment"
//           element={
//             <Elements stripe={stripePromise}>
//               <Payment />
//             </Elements>
//           }
//         />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/products/:productId" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//       </Route>
//     </Routes>
//   );
// }

// export default Routings;

// // import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Layout from "./Components/Layout/Layout";
// import Landing from "./Pages/Landing/Landing";
// import Payments from "./Pages/Payment/Payment";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";
// import ProductDetails from "./Pages/ProductDetails/ProductDetails";
// import Auth from "./Pages/Auth/Auth";
// import Payment from "./Pages/Payment/Payment";

// function Routings() {
//   return (
//     <Router>
//       <Routes>
//         {/* Wrap all pages inside Layout */}
//         <Route path="/auth" element={<Auth />} />
//         <Route element={<Layout />}>
//           <Route path="/" element={<Landing />} />
//           <Route path="/payments" element={<Payments />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/category/:categoryName" element={<Results />} />
//           <Route path="/products/:productId" element={<ProductDetails />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/payment" element={<Payment />} />{" "}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default Routings;