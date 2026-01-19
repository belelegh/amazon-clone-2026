import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import Loader from "../../Components/Loader/Loader";

import classes from "./payment.module.css";
import { axiosInstance } from "../../API/axios";
import { Type } from "../../utility/action.Type";

function Payment() {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) navigate("/auth");
  }, [user, navigate]);

  // Calculate total
  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );

  // Confirm payment(get client secret key)
  useEffect(() => {
    if (basket.length === 0 || total <= 0) return;

    const getClientSecret = async () => {
      try {
        const res = await axiosInstance.post(
          `/payments/create?total=${Math.round(total * 100)}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.error("Stripe init error:", err);

        const message =
          err?.response?.data?.error ||
          err?.message ||
          "Failed to initialize payment";

        setError(message);
      }
    };

    getClientSecret();
  }, [basket, total]);

  const handleChange = (event) => {
    setCardError(event.error ? event.error.message : "");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    setProcessing(true);
    setError(null);

    try {
      const cardElement = elements.getElement(CardElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: cardElement },
        }
      );

      if (error) {
        setError(error.message);
        setProcessing(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        // Save order (backend / firestore / webhook — your choice)
        await axiosInstance.post("/orders/create", {
          basket,
          amount: paymentIntent.amount,
          paymentIntentId: paymentIntent.id,
          created: new Date(),
        });

        // Clear basket (LOCAL STATE ONLY)
        dispatch({ type: Type.EMPTY_BASKET });

        setProcessing(false);
        navigate("/orders");
      }
    } catch (err) {
      console.error(err);
      setError("Payment failed. Please try again.");
      setProcessing(false);
    }
  };

  return (
    <div className={classes.payment}>
      <div className={classes.payment__container}>
        <h1>
          Checkout (<Link to="/cart">{basket.length} items</Link>)
        </h1>
        <hr />

        <div className={classes.payment__section}>
          <div className={classes.payment__items}>
            {basket.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                renderDesc={false}
                renderAddBtn={false}
                flex
              />
            ))}
          </div>
        </div>

        <div className={classes.payment__details}>
          <form onSubmit={handlePayment}>
            {cardError && <small style={{ color: "red" }}>{cardError}</small>}

            <CardElement onChange={handleChange} />

            <div className={classes.payment__priceContainer}>
              <CurrencyFormat amount={total} />
              <button
                disabled={processing || !stripe || !elements || !clientSecret}
              >
                {processing ? <Loader /> : "Buy Now"}
              </button>
            </div>

            {error && <div className={classes.payment__error}>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;



// import React from 'react'
// import Layout from '../../components/Layout/Layout';
// function Payment() {
//   return (
//     <Layout>
//       <div>Payment</div>
//     </Layout>
//   );
// }

// export default Payment



