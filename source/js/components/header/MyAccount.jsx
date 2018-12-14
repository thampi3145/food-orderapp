import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Redirect, Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default class MyAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComponent: false,
    };
    this.loginClick = this.loginClick.bind(this);
  }

  loginClick = (e) => {
    console.log("gghfg");
    this.setState({
      showComponent: true,
    });
  }
 
  render() {
    return (
      <div className="hdrmy_account pull-right">
        <Link to={`/login`} activeClassName="current"><FontAwesomeIcon icon={faUser} />Login</Link>
        
        {/* <FontAwesomeIcon icon={faCaretDown} />
        <div className="dropdown">
          <ul>
            <li><a href="#" data-toggle="modal" data-target="#login-modal">Login</a></li>
            <li><a href="mywhislist.html">Wishlist</a></li>
            <li><a href="cart.html">My Cart</a></li>
            <li><a href="myaccount.html">My Account</a></li>
            <li><a href="checkout.html">Checkout</a></li>
          </ul>
        </div> */}
      </div>
    );
  }
}