import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Header from 'views/Header';
import Banner from 'views/Banner';
import Content from 'views/Content';
import Footer from 'views/Footer';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Banner />
        <Content />
        <Footer />
      </div>
    );
  }
}