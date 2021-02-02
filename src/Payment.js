import React, { Component } from 'react'
import StripeCheckout from "react-stripe-checkout";
import { DataContext } from "./DataContext"
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts"

class Payment extends Component {

   constructor(prop){
	   super(prop);
        this.thanks = this.thanks.bind(this);
   }

   thanks(token){
	 console.log(token)
	 return ToastsStore.success("Your payment was successful")
   }

   static contextType = DataContext;

	render() {
		const { total } = this.context
		return (
			<div className='stripePayment'>
				<h2 className='heading'>Make your payment with <span>stripe</span></h2>
				<StripeCheckout 
				 stripeKey="pk_test_51IG4hAB84gCmikSTmQdGGWuJEesi7JzVUhiYOFELqO3HEo5N10vkcaMoiBrkSJc4kWkz3rb3ouwPkt7hDseRLiVS00rBDNug8o"
				 name="Payment for purchased items"
				 amount={total}
				 token={this.thanks}
				 />
				 <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>
			</div>
		)
	}
}

export default Payment

