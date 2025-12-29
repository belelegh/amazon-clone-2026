import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { Link } from "react-router-dom";
import classes from "../Cart/Cart.module.css";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;

  // Calculate subtotal
  // const subtotal = basket
  //   ?.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
  //   .toFixed(2);
  const subtotal = basket
    ?.reduce((total, item) => total + item.price * (item.amount || 0), 0)
    .toFixed(2);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          {/* Cart Items */}
          <div className={classes.cart_items}>
            <h3 className={classes.greeting}>
              Hello, {user?.email?.split("@")[0] || "Guest"}
            </h3>
            <h2 className={classes.title}>Your Shopping Cart</h2>
            <hr className={classes.divider} />

            {basket?.length === 0 ? (
              <div className={classes.empty_cart}>
                <p className={classes.empty_message}>
                  Oops! No items in your cart
                </p>
                <Link to="/" className={classes.continue_shopping}>
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div>
                {basket?.map((item, i) => (
                  <section
                    key={item.id || i}
                    className={classes.cart_item_wrapper}
                  >
                    <ProductCard
                      key={i}
                      product={item}
                      renderDesc={true}
                      renderAdd={false}
                      flex={true}
                      isCartItem={true}
                      dispatch={dispatch}
                    />
                    <div className={classes.quantity_controls}>
                      <button
                        className={classes.quantity_button}
                        onClick={() => increment(item)}
                      >
                        <IoIosArrowUp size={30} />
                      </button>

                      <span className={classes.quantity_display}>
                        Qty: {item.amount || 1}
                      </span>
                      <button
                        className={classes.quantity_button}
                        onClick={() => decrement(item.id)}
                      >
                        <IoIosArrowDown size={30} />
                      </button>
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          {basket?.length > 0 && (
            <div className={classes.order_summary}>
              <h3 className={classes.summary_title}>Order Summary</h3>
              <div className={classes.subtotal}>
                <span>
                  Subtotal (
                  {basket.reduce(
                    (total, item) => total + (item.quantity || 1),
                    0
                  )}{" "}
                  {basket.reduce(
                    (total, item) => total + (item.quantity || 1),
                    0
                  ) === 1
                    ? "item"
                    : "items"}
                  ):
                </span>
                <span className={classes.subtotal_amount}>${subtotal}</span>
              </div>

              <button className={classes.checkout_button}>
                Proceed to Checkout
              </button>

              <p className={classes.shipping_note}>
                Shipping and taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
