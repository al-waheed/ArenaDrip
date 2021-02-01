import React, { Component } from 'react'
import StripeCheckout from "react-stripe-checkout";
import { DataContext } from "./DataContext"

class Payment extends Component {

   constructor(prop){
	   super(prop);
        this.thanks = this.thanks.bind(this);
   }

   thanks(token){
     console.log(token)
   }

   static contextType = DataContext;

	render() {
		const { total } = this.context
		return (
			<div>
				<h2>Payment for items</h2>
				<StripeCheckout 
				 stripeKey="pk_test_51IG4hAB84gCmikSTmQdGGWuJEesi7JzVUhiYOFELqO3HEo5N10vkcaMoiBrkSJc4kWkz3rb3ouwPkt7hDseRLiVS00rBDNug8o"
				 name="Payment for items"
				 amount={`${total}.00`}
				 token={this.thanks}
				/>
			</div>
		)
	}
}

export default Payment

