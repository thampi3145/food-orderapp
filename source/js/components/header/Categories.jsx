import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    }
  }
 
  render() {
    return (
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="sidebar-megamenu" onClick={this.showMenu}>
          <a href="javascript:void(0)">Categories</a>
          {
            this.state.showMenu
            ? (
          <div className="menu-dropdown" 
                  ref={(element) => {
                  this.dropdownMenu = element;
                }}>
            <ul>
              <li className="first-child"><a href="#">What's New</a></li>
              <li className="dropdown">
                <a href="#" className="sub_drop_down">Women</a>
                <ul className="second-menu">
                  <li>
                    <a href="#">Tops</a>
                    <ul className="third-menu">
                      <li><a href="product-listing.html">jackets</a></li>
                      <li><a href="product-listing.html">Hoodies & Sweatshirts</a></li>
                      <li><a href="product-listing.html">Tees</a></li>
                      <li><a href="product-listing.html">Bras & Tanks</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="sub_drop_down">Tops</a>
                    <ul className="third-menu">
                      <li><a href="product-listing.html">jackets</a></li>
                      <li><a href="product-listing.html">Hoodies & Sweatshirts</a></li>
                      <li><a href="product-listing.html">Tees</a></li>
                      <li><a href="product-listing.html">Bras & Tanks</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="product-listing.html">Men</a></li>
              <li><a href="product-listing.html">Gear</a></li>
              <li><a href="product-listing.html">Training</a></li>
            </ul>
            <a href="product-listing.html" className="more-category-link">More Categories</a>
          </div>
            )
            : (
              null
            )
          }
        </div>
      </div>
    );
  }
}