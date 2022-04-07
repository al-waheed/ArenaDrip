import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./Navbar.css";
import { DataContext } from "./DataContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 4,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    background:'tomato',
  },
}));

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

            <img src="/bg pics/driplogo.png" alt="logo" className="logo" />
            <h1>
              <Link className="headingTitle" to="/"> ArenaDrip </Link>
              <span>&copy;</span>
            </h1>
          </div>
          <div className="search">
            <div className='subInput'>
              <FontAwesomeIcon className="searchIcon" icon={faSearch} />
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
                <Link className="navLink2" to="/cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cart.length > 0 && <span>{cart.length}</span>} color="secondary">
                      <ShoppingCartIcon  style={{color:'rgb(37, 36, 36)'}}/>
                    </StyledBadge>
                    <h4 style={{fontFamily:'Helvetica', fontSize:'15px', marginLeft:'5px' }}>Cart</h4>
                  </IconButton>
                 
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
