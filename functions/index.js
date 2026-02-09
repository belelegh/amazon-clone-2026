import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/https";
import logger from "firebase-functions/logger";
import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { ClimbingBoxLoader } from "react-spinners";
config()
const stripe = require ("stripe")(process.env.STRIPE_KEY)
setGlobalOptions({ maxInstances: 10 });

const app = express();
app.use(json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Sucess !",
    });
});

app.post("/payment/create", async (req, res) => {
    const toatl = req.query.total;
    if (toatl > 0) {
        const paymentIntent = await stripe.paymentIntents.create ({
            amount: toatl,
            currency: "usd",
        });
        console.log(paymentIntent)
        res.status(201).json({
         ClientSecret: paymentIntents.client_secret,
         });
         } else {
            res.status(403).json({
                message: "total must be greater than 0"
            })
         }
})

export const api = onRequest(app);