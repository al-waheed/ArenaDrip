import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { DataContext } from "./DataContext";
import CarouselPics from "./CarouselPics"

class Product extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart } = this.context;
    const productList = products.map((product) => {
      return (
        <div key={product._id} className="itemList">
          <div className="itemBox">
            <img src={product.image} alt="pics" className="itemPic" />
            <div className="itemName">{product.product}</div>
            <div className="itemPrice"><b>NGN</b>{product.price}</div>
            <button className="itemBtn" onClick={() => { addCart(product._id) }}>
              Add to cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <CarouselPics />
        <div className="itemContainer">
          <div className="items">{productList}</div>
        </div>
      </div>
    );
  }
}

export default Product;