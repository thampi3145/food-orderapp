import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

export default class BottomFooter extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="footer_bottom wdth100">
        <div className="container">
          <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 copyright_footer">
                <p>Copyright © 2016 by <a href="#">Girabuy.</a> All Rights Reserved.</p>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 footer_payment">
                <span className="payment-icon"><img src="assets/img/footer_payment.png" /></span>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


