import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

export default class Pinterest extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <a href="#"><img src="assets/img/pi-icon.png" className="img-fluid social-icon" /></a>
    );
  }
}