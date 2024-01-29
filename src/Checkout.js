import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

import { DataContext } from "./DataContext";

class Checkout extends Component {
  constructor(prop) {
    super(prop);
    this.thanks = this.thanks.bind(this);
  }

  thanks(token) {
    console.log(token);
    return ToastsStore.success("Payment was successful");
  }

  static contextType = DataContext;

  render() {
    const { total } = this.context;
    return (
      <div className="payment_container">
        <div className="paymentBox">
          <div className="stripePayment">
            <div class="marquee">
              <p>
                Use{" "}
                <span style={{ color: "green" }}> 4242 4242 4242 4242 </span>{" "}
                for Credit card number
              </p>
            </div>
            <h2 className="heading">
              Make your payment with <span>stripe</span>{" "}
            </h2>
            <StripeCheckout
              stripeKey="pk_test_51IG4hAB84gCmikSTmQdGGWuJEesi7JzVUhiYOFELqO3HEo5N10vkcaMoiBrkSJc4kWkz3rb3ouwPkt7hDseRLiVS00rBDNug8o"
              name="Payment of item"
              description="DRIPS PRODUCT"
              amount={total * 100}
              token={this.thanks}
              currency="NGN"
            />
            <ToastsContainer
              store={ToastsStore}
              position={ToastsContainerPosition.TOP_RIGHT}
            />
          </div>
          <div className="img">
            <img src="/bg pics/stripe.svg" alt="Pics" className="stripeBg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
