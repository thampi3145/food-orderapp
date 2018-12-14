import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default class CallUs extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="hdrphn-txt">
          <FontAwesomeIcon icon={faPhone} /><span style={{fontSize: 'medium'}}>Call us: <strong>+1 802-231-0467</strong></span>
        </div>
      </div>
    );
  }
}