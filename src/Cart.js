import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { DataContext } from "./DataContext";
class Cart extends Component {

  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotalPrice()
  }

  render() {
    const { cart, increase, decrease, deleteCart, total, clearCart } = this.context;
    const cartList = cart.length ? (cart.map((item) => {
      return (
        <div key={item._id} className="cartList">
          <div className="cartImg">
            <div className="cartPics">
              <img src={item.image} alt="pics" className="pics" />
              <div className="cartProduct">{item.product}</div>
            </div>
            <div className="cartPrice"><span>₦</span>{item.price}</div>
              <div className='countButtons'>
                <div><button className='button decrease' onClick={(id) => { decrease((item._id)) }}>
                <FontAwesomeIcon icon={faMinus} /></button></div>
                <span> {item.count} </span>
                <div><button className='button increase' onClick={() => { increase(item._id) }}>
                <FontAwesomeIcon icon={faPlus} /></button></div>
              </div>
          <div>
            <button className='deletBtn' onClick={() => { deleteCart(item._id) }}>
            <FontAwesomeIcon icon={faTrashAlt} /></button>
          </div>
          </div>
        </div>
      );
    })
    ) : (
      <div className='cartEmptyPics'>
        <h4 className="cartEmpty">
          Your cart is currently empty!
        </h4>
        <img src="/bg pics/bg.svg" alt='pic1' className='pics' />
        <Link to="/" className="shoppingBtn"> <button>Start Shopping</button> </Link>
      </div>
    );
    return (
      <div className="cartContainer">
        <div className="carts">{cartList}</div>
        {cart.length > 0 && <div className="payment">
          <div className='totalbox'>
            <div className="summary">
            <p>Order Summary</p>
            {cart.length > 1 ? <span>{cart.length} items</span>:<span>{cart.length} item</span>}
            </div>
            <p className="subtotal"><span>Subtotal: </span><h3>₦{total}.00</h3></p> 
            <p className="total"><span>Total: </span><h3>₦{total}</h3></p>
          </div>
          <Link to="/checkout" className="checkout"> <span> Continue to Checkout </span> </Link>
          <div className="btnBox">
            <button className="clearBtn" onClick={() => clearCart()}>Clear Cart</button>
          </div>
        </div>}
      </div>
    );

  }
}

export default Cart;