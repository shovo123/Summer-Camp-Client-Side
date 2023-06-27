import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import ChackOutForm from './ChackOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const cart = useLoaderData()
  const stringPrice = cart.price;
  const price = parseFloat(stringPrice)
  
  return (
    <div>
      <h2 className="text-xl text-center font-semibold text-green-700 my-4 ">
        ---Please Payment ----
      </h2>
      <Elements stripe={stripePromise}>
        <ChackOutForm price={price} cart={cart}/>
      </Elements>

    </div>
  );
};

export default Payment;