
import { useContext, useState } from "react";
import classes from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  // Correct way to use useContext with DataContext
  const { state } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate total items in cart
   const totalItem = state.basket?.reduce(
  (amount, item) => amount + item.amount,
  0
);

  // const getCartCount = () => {
  //   if (!state || !state.basket) return 0;
  //   return state.basket.reduce((total, item) => {
  //     return total + (item.quantity || 1);
  //   }, 0);
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      // You can add search navigation here
      // navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <section className={classes.fixed}>
      <section className={classes.header_section}>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* Use Link for SPA navigation */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>USA</span>
              </div>
            </div>
          </div>

          <form className={classes.search} onSubmit={handleSearch}>
            <select
              name="category"
              id="category-select"
              defaultValue=""
              aria-label="Select search category"
            >
              <option value="">All Departments</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home & Kitchen</option>
              <option value="books">Books</option>
            </select>
            <input
              type="text"
              name="search"
              id="search-input"
              placeholder="Search Amazon"
              aria-label="Search Amazon products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className={classes.search_button}
              aria-label="Search"
            >
              <BsSearch size={20} />
            </button>
          </form>

          <div className={classes.order_container}>
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="USA flag"
              />
              <select aria-label="Select language" defaultValue="en">
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
            </div>

            <Link to="/Auth" className={classes.account_link}>
              <div>
                <p>Hello, sign in</p>
                <span>Account & Lists</span>
              </div>
            </Link>

            <Link to="/orders" className={classes.orders_link}>
              <div>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <div className={classes.cart_container}>
                <BiCart size={35} />
                <span className={classes.cart_count}>{totalItem}</span>
              </div>
              <span className={classes.cart_label}></span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;


