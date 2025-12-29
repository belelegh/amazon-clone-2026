import React from 'react'
import Layout from '../../components/Layout/Layout';
function Payment() {
  return (
    <Layout>
      <div>Payment</div>
    </Layout>
  );
}

export default Payment
// // import React from "react";
// import classes from "../Header/header.module.css";
// import LowerHeader from "./LowerHeader";
// import { BsSearch } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <section className={classes.header_section}>
//         <div className={classes.header_container}>
//           <div className={classes.logo_container}>
//             <Link to="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </Link>

//             <div className={classes.delivery}>
//               <span>
//                 <SlLocationPin />{" "}
//               </span>
//               <div>
//                 <p>Deliverd to</p>
//                 <span> USA</span>
//               </div>
//             </div>
//           </div>

//           <div className={classes.search}>
//             <select name="" id="">
//               <option value="">All</option>
//             </select>
//             <input type="text" name="" id="" placeholder="search product" />
//             <BsSearch size={20} />
//           </div>

//           <div className={classes.order_container}>
            
//             <Link to="/en" className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                 alt="USA flag"
//               />
//               <select>
//                 <option value="">EN</option>
//               </select>
//             </Link>

//             <Link to="/SignIn">
//               <div>
//                 <p>Sign In</p>
//                 <span> Account & Lists</span>
//               </div>
//             </Link>

//             <Link to="/Orders">
//               <p>returns</p>
//               <span>& Orders</span>
//             </Link>

//             <Link to="cart" className={classes.cart}>
//               <BiCart size={35} />
//               <span>0</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </>
//   );
// };
// export default Header;