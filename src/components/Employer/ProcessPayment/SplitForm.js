import React, { useContext, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./payment.css";
import { UserContext } from "./../../../App";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitForm = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [error, setError] = useState(null);
  const [show, setShow] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    // setError(payload.error.message);
    if (payload.paymentMethod) {
      console.log(payload.paymentMethod.id);
      const cardInfo = { ...user };
      cardInfo.cardNumber = payload.paymentMethod.id;
      cardInfo.payment = true;
      setUser(cardInfo);
      setShow(true);
      setError("");
    }
    if (payload.error) {
      setShow(false);
      setError(payload.error.message);
      const userInfo = { ...user };
      userInfo.payment = true;
      setUser(userInfo);
    }
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form>
      <label>
        Card number
        <CardNumberElement
          className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement
          className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement
          className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      {user.payment ? (
        <div></div>
      ) : (
        <button
          // onClick={() => handlePayment(show)}
          onClick={handleSubmit}
          className="pay-btn"
          // type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      )}

      {show ? (
        <p style={{ color: "green" }}>
          you have successfully Done your Payment
          <br />
          Now you can Submit
        </p>
      ) : (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </form>
  );
};

export default SplitForm;
