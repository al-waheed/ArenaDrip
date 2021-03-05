import React, { Component, createContext } from "react";
import { storeProduct } from './Data';

export const DataContext = createContext();

export class DataProvider extends Component {
  state = {
    products: storeProduct,
    cart: [],
    total: 0,
  };

  addCart = id => {
    const { products, cart } = this.state;
    // const cartId = cart.map((cart) =>  cart._id)
    // console.log(cartId)
    const data = products.filter((product) => {
      return product._id === id;
    });
    this.setState({ cart: [...cart, ...data] });
  };

  increase = id => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotalPrice();
  };

  decrease = id => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (this.deleteCart(id)) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotalPrice();
  };

  deleteCart = id => {
    const { cart } = this.state;
    cart.forEach((item, index) => {
      if (item._id === id) {
        return cart.splice(index, 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotalPrice();
  };

  getTotalPrice = () => {
    const { cart } = this.state;
    const totalPrice = cart.reduce((prevItem, item) => {
      return prevItem + (item.price * item.count);
    }, 0);
    this.setState({ total: totalPrice });
  };

  clearCart = () => {
    this.setState({ cart: [], total: 0 });
    localStorage.setItem("dataCart", JSON.stringify([]));
    localStorage.setItem("dataTotal", JSON.stringify(0));
  }

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  };

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  };

  render() {
    const { products, cart, total } = this.state;
    const { addCart, increase, decrease, deleteCart, getTotalPrice, clearCart } = this;
    return (
      <DataContext.Provider value={{ products, cart, total, clearCart, addCart, increase, decrease, deleteCart, getTotalPrice }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
