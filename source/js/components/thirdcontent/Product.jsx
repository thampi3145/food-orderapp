import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Header from 'views/Header';
import Banner from 'views/Banner';
import Content from 'views/Content';

export default class Product extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-6  col-12">
          <div className="product_col wdth100">
            <h3 className="product_title"><span>most</span> VIEWED</h3>
            <div className="prod_details wdth100">
              <div className="prod_img">
                <a href="#"><img src="assets/img/luma-yoga-kit-2.jpg" /></a>
              </div>
              <div className="prod_info">
                <h2><a href="#">Sprite Yoga Companion Kit</a></h2>
                <ul className="star_list wdth100">
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                </ul>
                <p className="price_range">From<span className="cstm_price">€61.00</span>to<span className="cstm_price">€77.00</span></p>
              </div>
            </div>
            <div className="prod_details wdth100">
              <div className="prod_img">
                <a href="#"><img src="assets/img/lt02.jpg" /></a>
              </div>
              <div className="prod_info">
                <h2><a href="#">Sprite Yoga Companion Kit</a></h2>
                <ul className="star_list wdth100">
                  <li><a><i className="fa fa-star star_icn active"></i></a></li>
                  <li><a><i className="fa fa-star star_icn active"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                </ul>
                <p className="price_range">From<span className="cstm_price">€61.00</span>to<span className="cstm_price">€77.00</span></p>
              </div>
            </div>
            <div className="prod_details wdth100">
              <div className="prod_img">
                <a href="#"><img src="assets/img/lt04.jpg" /></a>
              </div>
              <div className="prod_info">
                <h2><a href="#">Solo Power Circuit</a></h2>
                <ul className="star_list wdth100">
                  <li><a><i className="fa fa-star star_icn active"></i></a></li>
                  <li><a><i className="fa fa-star star_icn active"></i></a></li>
                  <li><a><i className="fa fa-star-half star_icn active"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                </ul>
                <p className="price_range"><span className="cstm_price">€61.00</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="product_col wdth100">
              <h3 className="product_title"><span>LATEST </span> PRODUCTS</h3>
              <div className="prod_details wdth100">
                <div className="prod_img">
                  <a href="#"><img src="assets/img/luma-yoga-kit-2.jpg" /></a>
                </div>
                <div className="prod_info">
                  <h2><a href="#">Sprite Yoga Companion Kit</a></h2>
                  <ul className="star_list wdth100">
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                  </ul>
                  <p className="price_range">From<span className="cstm_price">€61.00</span>to<span className="cstm_price">€77.00</span></p>
                </div>
              </div>
              <div className="prod_details wdth100">
                <div className="prod_img">
                  <a href="#"><img src="assets/img/mb01-blue-0.jpg" /></a>
                </div>
                <div className="prod_info">
                  <h2><a href="#">Sprite Yoga Companion Kit</a></h2>
                  <ul className="star_list wdth100">
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                  </ul>
                  <p className="price_range">From<span className="cstm_price">€61.00</span>to<span className="cstm_price">€77.00</span></p>
                </div>
              </div>
              <div className="prod_details wdth100">
                <div className="prod_img">
                  <a href="#"><img src="assets/img/wb02-green-0.jpg" /></a>
                </div>
                <div className="prod_info">
                  <h2><a href="#">Sprite Yoga Companion Kit</a></h2>
                  <ul className="star_list wdth100">
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                    <li><a><i className="fa fa-star star_icn"></i></a></li>
                  </ul>
                  <p className="price_range">From<span className="cstm_price">€61.00</span>to<span className="cstm_price">€77.00</span></p>
                </div>
              </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="product_col wdth100">
            <h3 className="product_title"><span>BEST-SELLING </span> PRODUCTS</h3>
            <div className="prod_details wdth100">
              <div className="prod_img">
                <a href="#"><img src="assets/img/mb01-blue-0.jpg" /></a>
              </div>
              <div className="prod_info">
                <h2><a href="#">Sprite Yoga Companion Kit</a></h2>
                <ul className="star_list wdth100">
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                </ul>
                <p className="price_range">From<span className="cstm_price">€61.00</span>to<span className="cstm_price">€77.00</span></p>
              </div>
            </div>
            <div className="prod_details wdth100">
              <div className="prod_img">
                <a href="#"><img src="assets/img/mb04-black-0.jpg" /></a>
              </div>
              <div className="prod_info">
                <h2><a href="#">Sprite Yoga Companion Kit</a></h2>
                <ul className="star_list wdth100">
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                </ul>
                <p className="price_range">From<span className="cstm_price">€61.00</span>to<span className="cstm_price">€77.00</span></p>
              </div>
            </div>
            <div className="prod_details wdth100">
              <div className="prod_img">
                <a href="#"><img src="assets/img/mb03-black-0.jpg" /></a>
              </div>
              <div className="prod_info">
                <h2><a href="#">Sprite Yoga Companion Kit</a></h2>
                <ul className="star_list wdth100">
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                  <li><a><i className="fa fa-star star_icn"></i></a></li>
                </ul>
                <p className="price_range">From<span className="cstm_price">€61.00</span>to<span className="cstm_price">€77.00</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


