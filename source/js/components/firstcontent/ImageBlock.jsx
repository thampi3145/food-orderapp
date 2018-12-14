import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';


export default class ImageBlock extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="image-block w-100">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
            <a href="#"><img src="assets/img/smartphone-banner-image.png" className="img-fluid banner-images" /></a>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <a href="#"><img src="assets/img/payment20-banner-image.png" className="img-fluid banner-images" /></a>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
                <a href="#"><img src="assets/img/clearance-banner-image.png" className="img-fluid banner-images" /></a>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
                <a href="#"><img src="assets/img/laptop-lenovo-banner.png" className="img-fluid banner-images" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}