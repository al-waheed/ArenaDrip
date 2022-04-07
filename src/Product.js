import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Ratings from "./Rating";

import { DataContext } from "./DataContext";
import CarouselPics from "./CarouselPics";

class Product extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart, cartIds } = this.context;
    const productList = products.map((product) => {
      const viewCart = cartIds.includes(product._id);
      return (
        <div key={product._id} className="itemList">
          <div className="itemBox">
            <img src={product.image} alt="pics" className="itemPic" />
            <div className="itemName">{product.product}</div>
            <div className="itemPrice">
              <b>₦</b>{product.price}
            </div>
            <p> <Ratings/></p>
            {viewCart ? (
              <button className="viewCart"><Link to="/cart" style={{textDecoration:'none', color:'#fff'}}>
               View cart 
              </Link>
              </button>
            ) : (
              <button
                className="itemBtn"
                onClick={() => {
                  addCart(product._id);
                }}
              >
                Add to cart <FontAwesomeIcon icon={faCartPlus} />
              </button>
            )}
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
