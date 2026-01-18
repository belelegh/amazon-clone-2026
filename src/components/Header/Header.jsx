import React, { useContext } from "react";
import "./header.css";
import usFlag from "../../assets/img/us_Flag.jpg";
import { SlLocationPin } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import LowerHeader from "./LowerHeader";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataContext";
import { auth } from "../../utility/firebase";
import { signOut } from "firebase/auth";
import { Type } from "../../utility/action.Type";

function Header() {
  const { state, dispatch } = useContext(DataContext);
  const { user, basket } = state;
  const navigate = useNavigate();

  const totalItem = basket?.reduce((amount, item) => amount + item.amount, 0);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch({ type: Type.SET_USER, user: null });
    navigate("/auth");
  };

  return (
    <section className="fixed">
      <section className="header__container">
        {/* LEFT */}
        <div className="logo__container">
          <Link to="/">
            <img
              className="headerLogo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon"
            />
          </Link>

          <div className="delivery">
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Update Address</span>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="search">
          <select>
            <option>All</option>
          </select>
          <input type="text" placeholder="Search Product" />
          <button className="searchIcon">
            <IoIosSearch />
          </button>
        </div>

        {/* RIGHT */}
        <div className="header__right">
          <div className="lang">
            <img src={usFlag} alt="flag" />
            <select>
              <option>EN</option>
            </select>
          </div>

          {/* 🔧 FIXED AUTH BLOCK (NO CLASS CHANGES) */}
          {!user ? (
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
          ) : (
            <div onClick={handleLogout} style={{ cursor: "pointer" }}>
              <p>
                Hello{" "}
                {user?.email
                  ? user.email.split("@")[0].charAt(0).toUpperCase() +
                    user.email.split("@")[0].slice(1)
                  : "Guest"}
              </p>

              <span>Sign Out</span>
            </div>
          )}

          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className="cart">
            <div className="cartIconWrapper">
              <BsCart2 className="cartIcon" />
              <span className="cartCount">{totalItem}</span>
            </div>
          </Link>
        </div>
      </section>

      <LowerHeader />
    </section>
  );
}

export default Header;

// import { useContext, useState } from "react";
// import classes from "./Header.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import LowerHeader from "./LowerHeader";
// import { BsSearch } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";
// import { DataContext } from "../DataProvider/DataProvider";

// const Header = () => {
//   const { state, user } = useContext(DataContext); // Added user from context
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate(); // For programmatic navigation

//   // Calculate total items in cart
//   const getCartCount = () => {
//     if (!state || !state.basket) return 0;
//     return state.basket.reduce((total, item) => {
//       return total + (item.quantity || 1);
//     }, 0);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       console.log("Searching for:", searchTerm);
//       // You can add search navigation here
//       // navigate(`/search?q=${searchTerm}`);
//     }
//   };

//   const handleSignInClick = () => {
//     navigate("/Auth"); // Navigate to your Auth page
//   };

//   const handleSignOut = () => {
//     ////Add your sign out logic here
//    // For example, if you have Firebase auth:
//     signOut(auth).then(() => {
//       // Clear user from context
//       dispatch({ type: Type.SET_USER, user: null });
//     });
//     console.log("Sign out clicked");
//   };

//   return (
//     <section className={classes.fixed}>
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
//                 <SlLocationPin />
//               </span>
//               <div>
//                 <p>Delivered to</p>
//                 <span>USA</span>
//               </div>
//             </div>
//           </div>

//           <form className={classes.search} onSubmit={handleSearch}>
//             <select
//               name="category"
//               id="category-select"
//               defaultValue=""
//               aria-label="Select search category"
//             >
//               <option value="">All Departments</option>
//               <option value="electronics">Electronics</option>
//               <option value="clothing">Clothing</option>
//               <option value="home">Home & Kitchen</option>
//               <option value="books">Books</option>
//             </select>
//             <input
//               type="text"
//               name="search"
//               id="search-input"
//               placeholder="Search Amazon"
//               aria-label="Search Amazon products"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button
//               type="submit"
//               className={classes.search_button}
//               aria-label="Search"
//             >
//               <BsSearch size={20} />
//             </button>
//           </form>

//           <div className={classes.order_container}>
//             <div className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                 alt="USA flag"
//               />
//               <select aria-label="Select language" defaultValue="en">
//                 <option value="en">EN</option>
//                 <option value="es">ES</option>
//                 <option value="fr">FR</option>
//               </select>
//             </div>

//             {/* Sign In/Sign Out Section */}
//             <div 
//               className={classes.account_link} 
//               onClick={user ? handleSignOut : handleSignInClick}
//               style={{ cursor: 'pointer' }}
//             >
//               <div>
//                 <p>Hello, {user ? user.displayName || user.email?.split('@')[0] : "sign in"}</p>
//                 <span>{user ? "Account & Lists" : "Account & Lists"}</span>
//               </div>
//             </div>

//             <Link to="/orders" className={classes.orders_link}>
//               <div>
//                 <p>Returns</p>
//                 <span>& Orders</span>
//               </div>
//             </Link>

//             <Link to="/cart" className={classes.cart}>
//               <div className={classes.cart_container}>
//                 <BiCart size={35} />
//                 <span className={classes.cart_count}>{getCartCount()}</span>
//               </div>
//               <span className={classes.cart_label}></span>
//               {/* <button onClick={addToBasket}>Add to Cart</button> */}
//             </Link>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </section>
//   );
// };

// export default Header;











// import { useContext, useState } from "react";
// import classes from "./Header.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import LowerHeader from "./LowerHeader";
// import { BsSearch } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";
// import { DataContext } from "../DataProvider/DataProvider";

// const Header = () => {
//   const { state, user } = useContext(DataContext); // Added user from context
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate(); // For programmatic navigation

//   // Calculate total items in cart
//   const getCartCount = () => {
//     if (!state || !state.basket) return 0;
//     return state.basket.reduce((total, item) => {
//       return total + (item.quantity || 1);
//     }, 0);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       console.log("Searching for:", searchTerm);
//       // You can add search navigation here
//       // navigate(`/search?q=${searchTerm}`);
//     }
//   };

//   const handleSignInClick = () => {
//     navigate("/Auth"); // Navigate to your Auth page
//   };

//   const handleSignOut = () => {
//     // Add your sign out logic here
//     // For example, if you have Firebase auth:
//     // signOut(auth).then(() => {
//     //   // Clear user from context
//     //   dispatch({ type: Type.SET_USER, user: null });
//     // });
//     console.log("Sign out clicked");
//   };

//   return (
//     <section className={classes.fixed}>
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
//                 <SlLocationPin />
//               </span>
//               <div>
//                 <p>Delivered to</p>
//                 <span>USA</span>
//               </div>
//             </div>
//           </div>

//           <form className={classes.search} onSubmit={handleSearch}>
//             <select
//               name="category"
//               id="category-select"
//               defaultValue=""
//               aria-label="Select search category"
//             >
//               <option value="">All Departments</option>
//               <option value="electronics">Electronics</option>
//               <option value="clothing">Clothing</option>
//               <option value="home">Home & Kitchen</option>
//               <option value="books">Books</option>
//             </select>
//             <input
//               type="text"
//               name="search"
//               id="search-input"
//               placeholder="Search Amazon"
//               aria-label="Search Amazon products"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button
//               type="submit"
//               className={classes.search_button}
//               aria-label="Search"
//             >
//               <BsSearch size={20} />
//             </button>
//           </form>

//           <div className={classes.order_container}>
//             <div className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                 alt="USA flag"
//               />
//               <select aria-label="Select language" defaultValue="en">
//                 <option value="en">EN</option>
//                 <option value="es">ES</option>
//                 <option value="fr">FR</option>
//               </select>
//             </div>

//             {/* Sign In/Sign Out Section */}
//             <div 
//               className={classes.account_link} 
//               onClick={user ? handleSignOut : handleSignInClick}
//               style={{ cursor: 'pointer' }}
//             >
//               <div>
//                 <p>Hello, {user ? user.displayName || user.email?.split('@')[0] : "sign in"}</p>
//                 <span>{user ? "Account & Lists" : "Account & Lists"}</span>
//               </div>
//             </div>

//             <Link to="/orders" className={classes.orders_link}>
//               <div>
//                 <p>Returns</p>
//                 <span>& Orders</span>
//               </div>
//             </Link>

//             <Link to="/cart" className={classes.cart}>
//               <div className={classes.cart_container}>
//                 <BiCart size={35} />
//                 <span className={classes.cart_count}>{getCartCount()}</span>
//               </div>
//               <span className={classes.cart_label}></span>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </section>
//   );
// };

// export default Header;





// import { useContext, useState } from "react";
// import classes from "./Header.module.css";
// import { Link } from "react-router-dom";
// import LowerHeader from "./LowerHeader";
// import { BsSearch } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";
// import { DataContext } from "../DataProvider/DataProvider";

// const Header = () => {
//   // Correct way to use useContext with DataContext
//   const { state } = useContext(DataContext);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Calculate total items in cart
//   const getCartCount = () => {
//     if (!state || !state.basket) return 0;
//     return state.basket.reduce((total, item) => {
//       return total + (item.quantity || 1);
//     }, 0);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       console.log("Searching for:", searchTerm);
//       // You can add search navigation here
//       // navigate(`/search?q=${searchTerm}`);
//     }
//   };

//   return (
//     <section className={classes.fixed}>
//       <section className={classes.header_section}>
//         <div className={classes.header_container}>
//           <div className={classes.logo_container}>
//             {/* Use Link for SPA navigation */}
//             <Link to="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </Link>
//             <div className={classes.delivery}>
//               <span>
//                 <SlLocationPin />
//               </span>
//               <div>
//                 <p>Delivered to</p>
//                 <span>USA</span>
//               </div>
//             </div>
//           </div>

//           <form className={classes.search} onSubmit={handleSearch}>
//             <select
//               name="category"
//               id="category-select"
//               defaultValue=""
//               aria-label="Select search category"
//             >
//               <option value="">All Departments</option>
//               <option value="electronics">Electronics</option>
//               <option value="clothing">Clothing</option>
//               <option value="home">Home & Kitchen</option>
//               <option value="books">Books</option>
//             </select>
//             <input
//               type="text"
//               name="search"
//               id="search-input"
//               placeholder="Search Amazon"
//               aria-label="Search Amazon products"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button
//               type="submit"
//               className={classes.search_button}
//               aria-label="Search"
//             >
//               <BsSearch size={20} />
//             </button>
//           </form>

//           <div className={classes.order_container}>
//             <div className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                 alt="USA flag"
//               />
//               <select aria-label="Select language" defaultValue="en">
//                 <option value="en">EN</option>
//                 <option value="es">ES</option>
//                 <option value="fr">FR</option>
//               </select>
//             </div>
//             <Link to="/signin" className={classes.account_link}>
//               <div>
//                 <p>Hello, sign in</p>
//                 <span>Account & Lists</span>
//               </div>
//             </Link>

//             <Link to="/orders" className={classes.orders_link}>
//               <div>
//                 <p>Returns</p>
//                 <span>& Orders</span>
//               </div>
//             </Link>

//             <Link to="/cart" className={classes.cart}>
//               <div className={classes.cart_container}>
//                 <BiCart size={35} />
//                 <span className={classes.cart_count}>{getCartCount()}</span>
//               </div>
//               <span className={classes.cart_label}></span>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </section>
//   );
// };

// export default Header;
