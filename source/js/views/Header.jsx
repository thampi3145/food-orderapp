import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import TopHeader from 'components/header/TopHeader';
import MiddleHeader from 'components/header/MiddleHeader';
import BottomHeader from 'components/header/BottomHeader';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />
      </header>
    );
  }
}