import React, { Component } from "react";
import { DataContext } from "./DataContext";

class Product extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart, cartId } = this.context;
     const productList = products.map((product) => {
      const isAdded = cartId.includes(product._id);
      return (
        <div key={product._id} className="itemList">
          <div className="itemBox">
            <img src={product.image} alt="pics" className="itemPic" />
             <div className="itemName">{product.product}</div>
             <div className="itemPrice"> ${product.price}.00</div>
             <button onClick={() => {addCart(product._id)}}
              className={`${isAdded ? "itemBtnGray" : "itemBtn"}`}
              disabled={isAdded}>
              Add to cart
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="itemContainer">
        <div className="items">{productList}</div>
      </div>
    );
  }
}

export default Product;
