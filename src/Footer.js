import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare, } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div className="footer">
      <div className="subFooter">
        <div className="newsletter">
          <p>Newsletter:</p>
          <p>Subscribe to get information about products</p>
        </div>
        <div className="subscribe">
          <div className='subInput'>
            <input type="text" placeholder="Email Address" className="input" />
          </div>
          <div className='subBtn'>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="subFooter2">
        <div className="info">
          <p>ArenaDrip lorem dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
        </div>
        <div className="address">
          <p>Call us from 8:00am - 6:00pm</p>
          <h3>01-00000000, 07000000000, 09000000000</h3>
          <p>78C laboris nisi Road, esse cillum state.</p>
          <p>ArenaDrip@drip.ng</p>
        </div>
        <div className="about">
          <h3>About Us</h3>
          <h3>Contact Us</h3>
          <h3>Deals of the day</h3>
          <h3>FAQs</h3>
          <h3>Terms & Conditions</h3>
        </div>
      </div>
      <div className="legal">
        <p> We Using <span>Stripe</span> For Safe Payment.</p>
        <div className="connect">
          <p>Connect with us</p>
          <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
          <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
          <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
          <FontAwesomeIcon icon={faYoutubeSquare} className="icon" />
        </div>
        <p> &copy; 2021 ArenaDrip Limited. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
