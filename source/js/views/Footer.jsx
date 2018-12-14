import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import TopFooter from 'components/footer/TopFooter';
import BottomFooter from 'components/footer/BottomFooter';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <footer>
        <TopFooter />
        <BottomFooter />
      </footer>
    );
  }
}


