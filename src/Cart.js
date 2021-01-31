import React, { Component } from "react";
import { DataContext } from "./DataContext";
import { Link } from 'react-router-dom'

class Cart extends Component {

  static contextType = DataContext;

componentDidMount(){
  this.context.getTotalPrice()
}

  render() {
    const { cart, increase, decrease, deleteCart, total } = this.context;
      const cartList = cart.length ? (cart.map((item) => {
        return (
          <div key={item._id} className="cartList">
              <div className="cartImg">
                <img src={item.image} alt="pics" className="cartPics" />
               </div>
               <div className="cartInfo">
                <div className="cartProduct">{item.product}</div>
                 <div className="cartPrice">N{item.price}.00</div>
                 <div>
                 <button className='decount' onClick={()=>{decrease(item._id)}}> - </button>
                  <span> {item.count} </span>
                 <button className='incount' onClick={()=>{increase(item._id)}}> + </button>
                 </div>
                 <div>
                <button className='delbtn' onClick={()=>{deleteCart(item._id)}}>Remove</button>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="cartEmpty"> Your cart is currently empty</div>
    );
    return (
      <div className="cartContainer">
         <h1 className='cartHeading'>Your cart</h1>
          <div className="carts">{cartList}</div>
          <div className='total'>
          <Link className='paymentBtn' to="/payment"><span>Make Payment</span></Link>
          <h3><span>Total: </span> N{total}.00</h3>
        </div>
      </div>
    );
  }
}

export default Cart;
