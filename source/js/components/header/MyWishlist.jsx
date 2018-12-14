import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class MyWishlist extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="hdrmy_account hdrwish-nav">
      <FontAwesomeIcon icon={faHeart} /> My Wishlist
      </div>
    );
  }
}