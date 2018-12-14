import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

export default class ItemIcon extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="item-contentwrapper w-100">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="item-content">
              <div className="item-wrap">
                <span className="item-icon"><img src="assets/img/shipping-icon.png" /></span>
              </div>
              <h4>Free Shipping</h4>
              <p>Free shipping on all UK orders</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="item-content">
              <div className="item-wrap">
                <span className="item-icon"><img src="assets/img/icon-money.png" /></span>
              </div>
              <h4>Money Guarantee</h4>
              <p>30 days money back</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="item-content">
              <div className="item-wrap">
                <span className="item-icon"><img src="assets/img/icon-safe.png" /></span>
              </div>
              <h4>Safe Shopping</h4>
              <p>Safe shopping guarantee</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="item-content">
              <div className="item-wrap">
                <span className="item-icon"><img src="assets/img/icon-support.png" /></span>
              </div>
              <h4>Online Support</h4>
              <p>We support online 24/24</p>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
