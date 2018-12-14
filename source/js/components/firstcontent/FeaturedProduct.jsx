import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class FeaturedProduct extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="featured-products-column w-100">
        <h3><span>FEATURED</span> PRODUCTS</h3>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="owl-item">
              <div className="box-image">
                <a href="product-detail.html"><img src="assets/img/product-image1.jpg" className="img-fluid" /></a>
                <div className="bottom-action">
                  <a href="mywhislist.html" className="btn-action link-wishlist" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-compare" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-search" title="Add to Wish List"></a>
                </div>
              </div>
              <div className="box-info">
                  <ul className="star_list wdth100">
                    <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                    <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                    <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                    <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                    <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  </ul>
                  <h4 className="product-name"><a href="product-detail.html">Advanced Pilates & Yoga ... </a></h4>
                  <p className="price_range">€18.00</p>
                  <button type="submit" onClick="location.href='cart.html';" title="Add to Cart" className="action tocart primary btn-action btn-cart">
                    <span>Add to Cart</span>
                  </button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="owl-item">
              <div className="box-image">
                <a href="product-detail.html"><img src="assets/img/product-image2.jpg" className="img-fluid" /></a>
                <div className="bottom-action">
                  <a href="#" className="btn-action link-wishlist" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-compare" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-search" title="Add to Wish List"></a>
                </div>
              </div>
              <div className="box-info">
                <ul className="star_list wdth100">
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                </ul>
                <h4 className="product-name"><a href="product-detail.html">Advanced Pilates & Yoga ... </a></h4>
                <p className="price_range">€18.00</p>
                <button type="submit" onClick="location.href='cart.html';" title="Add to Cart" className="action tocart primary btn-action btn-cart">
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="owl-item">
              <div className="box-image">
                <a href="product-detail.html"><img src="assets/img/product-image3.jpg" className="img-fluid" /></a>
                <span className="label-product">Sale</span>
                <div className="bottom-action">
                  <a href="#" className="btn-action link-wishlist" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-compare" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-search" title="Add to Wish List"></a>
                </div>
              </div>
              <div className="box-info">
                <ul className="star_list wdth100">
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                </ul>
                <h4 className="product-name"><a href="product-detail.html">Advanced Pilates & Yoga ... </a></h4>
                <p className="price_range">€18.00</p>
                <button type="submit" onClick="location.href='cart.html';" title="Add to Cart" className="action tocart primary btn-action btn-cart">
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="owl-item">
              <div className="box-image">
                <a href="product-detail.html"><img src="assets/img/product-image4.jpg" className="img-fluid" /></a>
                <div className="bottom-action">
                  <a href="#" className="btn-action link-wishlist" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-compare" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-search" title="Add to Wish List"></a>
                </div>
              </div>
              <div className="box-info">
                <ul className="star_list wdth100">
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                </ul>
                <h4 className="product-name"><a href="product-detail.html">Advanced Pilates & Yoga ... </a></h4>
                <p className="price_range">€18.00</p>
                <button type="submit" onClick="location.href='cart.html';" title="Add to Cart" className="action tocart primary btn-action btn-cart">
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="owl-item">
              <div className="box-image">
                <a href="product-detail.html"><img src="assets/img/product-image5.jpg" className="img-fluid" /></a>
                <div className="bottom-action">
                  <a href="#" className="btn-action link-wishlist" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-compare" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-search" title="Add to Wish List"></a>
                </div>
              </div>
              <div className="box-info">
                <ul className="star_list wdth100">
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                </ul>
                <h4 className="product-name"><a href="product-detail.html">Advanced Pilates & Yoga ... </a></h4>
                <p className="price_range">€18.00</p>
                <button type="submit" onClick="location.href='cart.html';" title="Add to Cart" className="action tocart primary btn-action btn-cart">
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="owl-item">
              <div className="box-image">
                <a href="product-detail.html"><img src="assets/img/product-image6.jpg" className="img-fluid" /></a>
                <div className="bottom-action">
                  <a href="#" className="btn-action link-wishlist" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-compare" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-search" title="Add to Wish List"></a>
                </div>
              </div>
              <div className="box-info">
                <ul className="star_list wdth100">
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                </ul>
                <h4 className="product-name"><a href="product-detail.html">Advanced Pilates & Yoga ... </a></h4>
                <p className="price_range">€18.00</p>
                <button type="submit" onClick="location.href='cart.html';" title="Add to Cart" className="action tocart primary btn-action btn-cart">
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="owl-item">
              <div className="box-image">
                <a href="product-detail.html"><img src="assets/img/product-image8.jpg" className="img-fluid" /></a>
                <div className="bottom-action">
                  <a href="#" className="btn-action link-wishlist" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-compare" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-search" title="Add to Wish List"></a>
                </div>
              </div>
              <div className="box-info">
                <ul className="star_list wdth100">
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                </ul>
                <h4 className="product-name"><a href="product-detail.html">Advanced Pilates & Yoga ... </a></h4>
                <p className="price_range">€18.00</p>
                <button type="submit" onClick="location.href='cart.html';" title="Add to Cart" className="action tocart primary btn-action btn-cart">
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="owl-item">
              <div className="box-image">
                <a href="product-detail.html"><img src="assets/img/product-image8.jpg" className="img-fluid" /></a>
                <div className="bottom-action">
                  <a href="#" className="btn-action link-wishlist" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-compare" title="Add to Wish List"></a>
                  <a href="#" className="btn-action link-wishlist link-search" title="Add to Wish List"></a>
                </div>
              </div>
              <div className="box-info">
                <ul className="star_list wdth100">
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                  <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                </ul>
                <h4 className="product-name"><a href="product-detail.html">Advanced Pilates & Yoga ... </a></h4>
                <p className="price_range">€18.00</p>
                <button type="submit" onClick="location.href='cart.html';" title="Add to Cart" className="action tocart primary btn-action btn-cart">
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}