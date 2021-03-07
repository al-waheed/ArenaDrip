import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";

class Navbar extends Component {
  static contextType = DataContext;

  render() {
    const { cart } = this.context;
    return (
      <header>
        <div className="menu">
          <div className="heading">
            <h1>
              <Link className="headingTitle" to="/"> ArenaDrip </Link>
              <span>&copy;</span>
            </h1>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Link className="navLink" to="/"> Product </Link>
              </li>
              <li>
                <Link className="navLink2" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                {cart.length > 0 && <span>{cart.length}</span>}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
