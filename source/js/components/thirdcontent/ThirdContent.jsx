import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Blog from 'components/thirdcontent/Blog';
import BrandLogo from 'components/thirdcontent/BrandLogo';
import Product from 'components/thirdcontent/Product';
import Subscribe from 'components/thirdcontent/Subscribe';

export default class ThirdContent extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <section className="main-content pad-btm0 pad-top75">
          <div className="container">
            <Blog />
            <BrandLogo />
          </div>
        </section>
        <section className="product_wrapper">
          <div className="container">
            <Product />
            <Subscribe />
          </div>
        </section>
      </div>
    );
  }
}


