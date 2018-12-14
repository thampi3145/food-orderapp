import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Categories from 'components/header/Categories';

export default class BottomHeader extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="header-top header-bottom">
        <div className="container">
          <div className="row">
            <Categories />
            <div className="col-xl-9 col-lg-9 col-md-0 col-sm-0 col-0">
              <a className="header-home-nav" href="index.html">Home</a>
              <a className="header-home-nav hot-deal-link" href="#">HOT DEAL</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}