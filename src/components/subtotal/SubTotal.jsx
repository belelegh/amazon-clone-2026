import React, { useContext } from "react";
import { DataContext } from "../DataProvider/DataContext";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./subtotal.module.css";
import { Link } from "react-router-dom";

function Subtotal() {
  const { state } = useContext(DataContext);
  const { basket } = state;

  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );

  return (
    <div className={classes.subtotal}>
      <div className={classes.subtotalText}>
        Subtotal ({basket.length} item{basket.length !== 1 ? "s" : ""}):{" "}
        {/*differenciate between single/plural item(s) */}
        <strong>
          <CurrencyFormat amount={total} />
        </strong>
      </div>

      <div className={classes.gift}>
        <input type="checkbox" id="gift" />
        <label htmlFor="gift">This order contains a gift</label>
      </div>

      <Link to="/Payment">
        <button className={classes.checkoutBtn}>Continue to checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;