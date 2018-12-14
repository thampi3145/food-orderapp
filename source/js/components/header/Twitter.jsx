import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

export default class Twitter extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <a href="#"><img src="assets/img/tw-icon.png" className="img-fluid social-icon" /></a>
    );
  }
}