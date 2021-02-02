import React, { Component, createContext } from "react";

export const DataContext = createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: 11,
        count: 1,
        product: "Bell Pepper",
        image: "./image/bell pepper.jpg",
        price: 25,
      },
      {
        _id: 12,
        count: 1,
        product: "Chilli Pepper",
        image: "./image/chilli pepper.jpg",
        price: 55,
      },
      {
        _id: 13,
        count: 1,
        product: "Dry Pepper",
        image: "./image/dry pepper.jpg",
        price: 25,
      },
      {
        _id: 14,
        count: 1,
        product: "Green Pepper",
        image: "./image/green pepper.jpg",
        price: 45,
      },
      {
        _id: 15,
        count: 1,
        product: "Onions",
        image: "./image/onions.jpg",
        price: 55,
      },
      {
        _id: 16,
        count: 1,
        product: "irish potato",
        image: "./image/irish potato.jpg",
        price: 50,
      },
      {
        _id: 17,
        count: 1,
        product: "Red Pepper",
        image: "./image/red pepper.jpg",
        price: 95,
      },
      {
        _id: 18,
        count: 1,
        product: "tomato",
        image: "./image/tomato.jpg",
        price: 65,
      },
      {
        _id: 19,
        count: 1,
        product: "yellow bellpepper",
        image: "./image/yellow bellpepper.jpg",
        price: 25,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = id => {
    const { products, cart } = this.state;
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
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart });
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
    const totalPrice = cart.reduce((prev, item) => {
      return prev + (item.price * item.count);
    }, 0);
    this.setState({ total: totalPrice });
  };

  componentDidUpdate(){
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  };

  componentDidMount(){
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
    const cartId = cart.map((item) => { return item._id; });
    const { addCart, increase, decrease, deleteCart, getTotalPrice } = this;
    return (
      <DataContext.Provider value={{ products, cartId, cart, total, addCart, increase, decrease, deleteCart, getTotalPrice }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
