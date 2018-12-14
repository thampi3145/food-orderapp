import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import FirstContent from 'components/firstcontent/FirstContent';
import SecondContent from 'components/secondcontent/SecondContent';
import ThirdContent from 'components/thirdcontent/ThirdContent';

export default class Content extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <FirstContent />
        <SecondContent />
        <ThirdContent />
      </div>
    );
  }
}
