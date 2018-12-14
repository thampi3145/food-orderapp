import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default class TopFooter extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="footer_top wdth100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="footer_col wdth100">
                    <h4 className="footer_title">My Account</h4>
                    <ul className="footer_list">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Orders History</a></li>
                      <li><a href="#">Information</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Site Map</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="footer_col wdth100">
                    <h4 className="footer_title">Information</h4>
                    <ul className="footer_list">
                      <li><a href="#">Shipping Policy</a></li>
                      <li><a href="#">Compensation First</a></li>
                      <li><a href="myaccount.html">My Account</a></li>
                      <li><a href="#">Return Policy</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="footer_col wdth100">
                    <h4 className="footer_title">Our Services</h4>
                    <ul className="footer_list">
                      <li><a href="mywhislist.html">Wishlist</a></li>
                      <li><a href="#">Custom Services</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Information</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="footer_col wdth100">
                <h4 className="footer_title">Contáctenos</h4>
                <ul className="contact_list wdth100">
                  <li>
                      <span className="fa fa-home"><FontAwesomeIcon icon={faHome} /></span> Gira Financial Group AG: Bahnhofstrasse, 26052 Hergiswil, Nidwalden.
                  </li>
                  <li>
                    <span className="fa fa-paper-plane"><FontAwesomeIcon icon={faPaperPlane} /></span>
                    <a href="mailto:info@girabuy.com" target="_blank">info@girabuy.com</a>&nbsp;
                  </li>
                  <li className="contact_phone">
                    <span className="fa fa-phone"><FontAwesomeIcon icon={faPhone} /></span>
                    <span className="contact_no">+1 802-231-0467</span>
                  </li>
                </ul>
                <ul className="social_list">
                  <li><a href="#"><img src="assets/img/fb-icon.png" className="img-fluid social-icon" /></a></li>
                  <li><a href="#"><img src="assets/img/tw-icon.png" className="img-fluid social-icon" /></a></li>
                  <li><a href="#"><img src="assets/img/gp-icon.png" className="img-fluid social-icon" /></a></li>
                  <li><a href="#"><img src="assets/img/li-icon.png" className="img-fluid social-icon" /></a></li>
                  <li><a href="#"><img src="assets/img/pi-icon.png" className="img-fluid social-icon" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}