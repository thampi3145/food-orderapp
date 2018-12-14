import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

export default class TabNav extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="ltabs-nav">
        <ul className="nav">
          <li><a data-toggle="tab" className="active" href="#bags">Bags</a></li>
          <li><a data-toggle="tab" href="#fitness">Fitness Equipment</a></li>
          <li><a data-toggle="tab" href="#watches">Watches</a></li>
        </ul>
      </div>
    );
  }
}