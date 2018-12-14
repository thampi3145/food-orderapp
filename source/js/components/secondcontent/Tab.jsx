import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import styles from "slick-carousel/slick/slick.css";

export default class Tab extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="tab-content">
        <div className="ltabs-conent-slider">
          <div id="bags" className="tab-pane active">
            <div id="demo">
              <Slider {...settings} id="owl-demo" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="owl-item">
                    <div className="box-image">
                      <a href="#"><img src="assets/img/bolo-sport-watch-img.jpg" className="img-fluid" /></a>
                      <span className="label-product">Sale</span>
                      <a className="sm_quickview_handler" title="Quick View" href="#">Quick View</a>
                    </div>
                    <div className="box-info">
                      <ul className="star_list wdth100">
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                      </ul>
                      <h4 className="product-name">Advanced Pilates & Yoga ... </h4>
                      <p className="price_range">€18.00</p>
                      <div className="action-box">
                        <a href="#" className="whislist-icon"></a>
                        <button type="submit" onClick="location.href='cart.html';" className="add-to-cart-btn">Add to Cart</button>
                        <a href="#" className="whislist-icon tocompare-icon"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="owl-item">
                    <div className="box-image">
                      <a href="#"><img src="assets/img/bolo-sport-watch-img.jpg" className="img-fluid" /></a>
                      <span className="label-product">Sale</span>
                      <a className="sm_quickview_handler" title="Quick View" href="#">Quick View</a>
                    </div>
                    <div className="box-info">
                      <ul className="star_list wdth100">
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                      </ul>
                      <h4 className="product-name">Advanced Pilates & Yoga ... </h4>
                      <p className="price_range">€18.00</p>
                      <div className="action-box">
                        <a href="#" className="whislist-icon"></a>
                        <button type="submit" onClick="location.href='cart.html';" className="add-to-cart-btn">Add to Cart</button>
                        <a href="#" className="whislist-icon tocompare-icon"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="owl-item">
                    <div className="box-image">
                      <a href="#"><img src="assets/img/bolo-sport-watch-img.jpg" className="img-fluid" /></a>
                      <span className="label-product">Sale</span>
                      <a className="sm_quickview_handler" title="Quick View" href="#">Quick View</a>
                    </div>
                    <div className="box-info">
                      <ul className="star_list wdth100">
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                      </ul>
                      <h4 className="product-name">Advanced Pilates & Yoga ... </h4>
                      <p className="price_range">€18.00</p>
                      <div className="action-box">
                        <a href="#" className="whislist-icon"></a>
                        <button type="submit" onClick="location.href='cart.html';" className="add-to-cart-btn">Add to Cart</button>
                        <a href="#" className="whislist-icon tocompare-icon"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="owl-item">
                    <div className="box-image">
                      <a href="#"><img src="assets/img/bolo-sport-watch-img.jpg" className="img-fluid" /></a>
                      <span className="label-product">Sale</span>
                      <a className="sm_quickview_handler" title="Quick View" href="#">Quick View</a>
                    </div>
                    <div className="box-info">
                      <ul className="star_list wdth100">
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                      </ul>
                      <h4 className="product-name">Advanced Pilates & Yoga ... </h4>
                      <p className="price_range">€18.00</p>
                      <div className="action-box">
                        <a href="#" className="whislist-icon"></a>
                        <button type="submit" onClick="location.href='cart.html';" className="add-to-cart-btn">Add to Cart</button>
                        <a href="#" className="whislist-icon tocompare-icon"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="owl-item">
                    <div className="box-image">
                      <a href="#"><img src="assets/img/bolo-sport-watch-img.jpg" className="img-fluid" /></a>
                      <span className="label-product">Sale</span>
                      <a className="sm_quickview_handler" title="Quick View" href="#">Quick View</a>
                    </div>
                    <div className="box-info">
                      <ul className="star_list wdth100">
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                      </ul>
                      <h4 className="product-name">Advanced Pilates & Yoga ... </h4>
                      <p className="price_range">€18.00</p>
                      <div className="action-box">
                        <a href="#" className="whislist-icon"></a>
                        <button type="submit" onClick="location.href='cart.html';" className="add-to-cart-btn">Add to Cart</button>
                        <a href="#" className="whislist-icon tocompare-icon"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="owl-item">
                    <div className="box-image">
                      <a href="#"><img src="assets/img/bolo-sport-watch-img.jpg" className="img-fluid" /></a>
                      <span className="label-product">Sale</span>
                      <a className="sm_quickview_handler" title="Quick View" href="#">Quick View</a>
                    </div>
                    <div className="box-info">
                      <ul className="star_list wdth100">
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                      </ul>
                      <h4 className="product-name">Advanced Pilates & Yoga ... </h4>
                      <p className="price_range">€18.00</p>
                      <div className="action-box">
                        <a href="#" className="whislist-icon"></a>
                        <button type="submit" onClick="location.href='cart.html';" className="add-to-cart-btn">Add to Cart</button>
                        <a href="#" className="whislist-icon tocompare-icon"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="owl-item">
                    <div className="box-image">
                      <a href="#"><img src="assets/img/bolo-sport-watch-img.jpg" className="img-fluid" /></a>
                      <span className="label-product">Sale</span>
                      <a className="sm_quickview_handler" title="Quick View" href="#">Quick View</a>
                    </div>
                    <div className="box-info">
                      <ul className="star_list wdth100">
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                        <li><a><FontAwesomeIcon icon={faStar} className="star_icn" /></a></li>
                      </ul>
                      <h4 className="product-name">Advanced Pilates & Yoga ... </h4>
                      <p className="price_range">€18.00</p>
                      <div className="action-box">
                        <a href="#" className="whislist-icon"></a>
                        <button type="submit" onClick="location.href='cart.html';" className="add-to-cart-btn">Add to Cart</button>
                        <a href="#" className="whislist-icon tocompare-icon"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}