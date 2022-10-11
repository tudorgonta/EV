import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function CheckoutForm() {

  const cart = useSelector((state) => state.cart);
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  async function createForm() {
    await fetch('/api/user/form', {
      method: 'POST',
      body: JSON.stringify(cart[2]),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    createForm()
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `https://ev-two.vercel.app/success`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element"  className="text-white"/>
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <button id="button-text" className="px-14 rounded-3xl text-gray-700 mt-6 py-3 pt-4 hover:bg-gray-100 bg-white duration-300 text-[1.15em] font-medium">
          {isLoading ? <div className="spinner text-black bg-black" id="spinner"></div> : "Pay now"}
        </button>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}