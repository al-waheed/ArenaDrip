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
	//  window.location.reload()
	 return ToastsStore.success("Your payment was successful")
   }

   static contextType = DataContext;

	render() {
		const { total } = this.context
		return (
			<div className="paymentBox">
			 <div className='stripePayment'>
				<h2 className='heading'>Make your payment with <span>stripe</span> </h2>
				<StripeCheckout 
				 stripeKey="pk_test_51IG4hAB84gCmikSTmQdGGWuJEesi7JzVUhiYOFELqO3HEo5N10vkcaMoiBrkSJc4kWkz3rb3ouwPkt7hDseRLiVS00rBDNug8o"
				 name="Payment of item"
				 description="FRESH PRODUCT"
				 amount= {total * 100}
				 token={this.thanks}
				 currency="NGN"
				 />
                 <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>
			  </div>
			  <div className="img">
			    <img src="/bg pics/stripe.png" alt="Pics" className='stripeBg'/>
			  </div>
			</div>
		)
	}
}

export default Payment

