import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="searchbox-column">
        <form>
          <select className="cat searchbox-category" name="cat">
            <option value="">All Categories</option>
            <option value="7">- - Gear</option>
            <option value="8">- - - - Bags</option>
            <option value="9">- - - - Fitness Equipment</option>
            <option value="10">- - - - Watches</option>
            <option value="13">- - Training</option>
            <option value="14">- - - - Video Download</option>
            <option value="15">- - Men</option>
            <option value="16">- - - - Tops</option>
            <option value="17">- - - - Bottoms</option>
            <option value="24">- - Women</option>
            <option value="25">- - - - Tops</option>
            <option value="26">- - - - Bottoms</option>
            <option value="45">- - Sale</option>
            <option value="46">- - What's New</option>
          </select>
          <input id="searchbox" type="text" name="q" onFocus="if(this.value=='Search product...') this.value='';" onBlur="if(this.value=='') this.value='Search product...';" value="Search product..." className="input-text input-searchbox" maxLength="128" role="combobox" aria-haspopup="false" aria-autocomplete="both" autoComplete="off" />
          <button type="submit" title="Search" className="btn-searchbox" disabled="">Search</button>
        </form>
      </div>
    );
  }
}