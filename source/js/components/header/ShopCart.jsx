import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default class ShopCart extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="shopcart-column">
        <div className="showcart">
          <span className="text">SHOPPING CART</span>
          <span className="price-minicart">€0.00 <FontAwesomeIcon icon={faCaretDown} /></span>
        </div>
        <div className="block-minicart">You have no items in your shopping cart.</div>
      </div>
    );
  }
}