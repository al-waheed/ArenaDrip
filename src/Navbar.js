import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css";
import { DataContext } from "./DataContext";

class Navbar extends Component {
  
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotalPrice()
  }

  render() {
    const { cart } = this.context;
    return (
      <header>
        <div className="menu">
          <div className="heading">
          
          <img src="/bg pics/driplogo.png" alt="logo" className="logo"/>
            <h1>
              <Link className="headingTitle" to="/"> ArenaDrip </Link>
              <span>&copy;</span>
            </h1>
          </div>
          <div className="search">
          <div className='subInput'>
          <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
            <input type="text" placeholder="Search product & brands" className="input" />
            
          </div>
          <div className='subBtn'>
            <button>Search</button>
          </div>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Link className="navLink" to="/"> Product </Link>
              </li>
              <li>
                <Link className="navLink2" to="/cart"><FontAwesomeIcon style={{fontSize:"18px"}} icon={faShoppingCart} />
                {cart.length > 0 && <span>{cart.length}</span>}  
                <h4 style={{marginLeft:"5px", marginTop:"25px", fontWeight:"500"}}>Cart</h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
