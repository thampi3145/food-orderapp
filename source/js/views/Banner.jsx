import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div id="demo" className="banner-slider carousel slide">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          <div>
            <img alt="Home" src="assets/img/home-slider1.jpg" />
          </div>
          <div>
            <img alt="Home" src="assets/img/home-slider2.jpg" />
          </div>
          <div>
            <img alt="Home" src="assets/img/home-slider3.jpg" />
          </div>
          <div>
            <img alt="Home" src="assets/img/home-slider4.jpg" />
          </div>
        </Carousel>
      </div>
    );
  }
}