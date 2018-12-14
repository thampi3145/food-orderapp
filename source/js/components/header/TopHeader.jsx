import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Facebook from 'components/header/Facebook';
import Twitter from 'components/header/Twitter';
import GooglePlus from 'components/header/GooglePlus';
import LinkedIn from 'components/header/LinkedIn';
import Pinterest from 'components/header/Pinterest';
import CallUs from 'components/header/CallUs';
// import MyWishlist from 'components/header/MyWishlist';
import MyAccount from 'components/header/MyAccount';

export default class TopHeader extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0 col-0">
              <div className="hdrsocials-column">
                <Facebook />
                <Twitter />
                <GooglePlus />
                <LinkedIn />
                <Pinterest />
              </div>
            </div>
            <CallUs />
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              {/* <MyWishlist /> */}
              <MyAccount />
            </div>
          </div>
        </div>
      </div>
    );
  }
}