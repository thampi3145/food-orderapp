import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

export default class Subscribe extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="subscribe_us wdth100">
        <div className="subs_form">
          <div className="searchbox-column subscribe-column">
            <form>
              <input id="searchbox" type="text" name="q" onFocus="if(this.value=='Your email address') this.value='';" onBlur="if(this.value=='') this.value='Your email address';" value="Your email address" className="input-text input-searchbox" maxLength="128" role="combobox" aria-haspopup="false" aria-autocomplete="both" autoComplete="off" />
              <button type="submit" title="Search" className="btn-searchbox" disabled="">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}