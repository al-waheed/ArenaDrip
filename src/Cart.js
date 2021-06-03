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
            </div>
            <div className="cartInfo">
              <div className="cartProduct">{item.product}</div>
              <div className="cartPrice"><span>N</span>{item.price}</div>
              <div className='countButtons'>
                <div><button className='decrease' onClick={() => { decrease(item._id) }}><FontAwesomeIcon icon={faMinus} /></button></div>
                <span> {item.count} </span>
                <div><button className='increase' onClick={() => { increase(item._id) }}><FontAwesomeIcon icon={faPlus} /></button></div>
              </div>
            </div>
          </div>
          <div>
            <button className='deletBtn' onClick={() => { deleteCart(item._id) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
          </div>
        </div>
      );
    })
    ) : (
      <div className='cartEmptyPics'>
        <h4 className="cartEmpty">
          Your cart is currently empty
      </h4>
        <img src="/bg pics/bg.png" alt='pic1' className='pics' />
      </div>
    );
    return (
      <div className="cartContainer">
        <h1 className='cartHeading'>Your cart</h1>
        <div className="carts">{cartList}</div>
        { cart.length > 0 && <div>
          <div className='total'>
            <Link to="/checkout" className="paymentBtn"> <span>Checkout </span> </Link>
            <h3><span>Total: </span><b>N</b>{total}.00</h3>
          </div>
          <div className="btnBox">
            <button className="clearBtn" onClick={() => clearCart()}>clear cart</button>
          </div>
        </div>}
      </div>
    );

  }
}

export default Cart;