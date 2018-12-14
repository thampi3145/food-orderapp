import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import SearchBox from 'components/header/SearchBox';
import ShopCart from 'components/header/ShopCart';

export default class MiddleHeader extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="header-top header-middle">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="logo-column text-center">
                <a className="logo img-fluid" href="#"><img src="assets/img/logo-girabuy.png" /></a>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <SearchBox />
              <ShopCart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}