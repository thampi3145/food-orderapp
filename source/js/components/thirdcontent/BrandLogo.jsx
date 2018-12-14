import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

export default class BrandLogo extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="brand-logo">
        <img src="assets/img/brand-1.jpg" className="img-fluid" />
        <img src="assets/img/brand-2.jpg" className="img-fluid" />
        <img src="assets/img/brand-3.jpg" className="img-fluid" />
        <img src="assets/img/brand-4.jpg" className="img-fluid" />
        <img src="assets/img/brand-5.jpg" className="img-fluid" />
        <img src="assets/img/brand-6.png" className="img-fluid" />
        <img src="assets/img/brand-7.jpg" className="img-fluid" />
      </div>
    );
  }
}


