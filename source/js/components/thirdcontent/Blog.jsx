import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="w-100">
        <h3><span>LATEST </span> BLOG</h3>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="blog-list-column">
              <div className="post-image">
                <img src="assets/img//post-image1.jpg" className="img-fluid" />
              </div>
              <div className="post_content">
                <div className="date_added">
                  <span className="day">26</span>
                  <span className="day month">Oct</span>
                </div>
                <div className="post-content-rght">
                  <h4><a href="#">Digital Event</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut...</p>
                  <div className="post-info">
                    <span className="comment">03 <FontAwesomeIcon icon={faComments} /></span>
                    <a className="readmore" href="#">View more <FontAwesomeIcon icon={faArrowCircleRight} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="blog-list-column">
              <div className="post-image">
                <img src="assets/img/post-image2.jpg" className="img-fluid" />
              </div>
              <div className="post_content">
                <div className="date_added">
                  <span className="day">26</span>
                  <span className="day month">Oct</span>
                </div>
                <div className="post-content-rght">
                  <h4><a href="#">Digital Event</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut...</p>
                  <div className="post-info">
                    <span className="comment">03 <FontAwesomeIcon icon={faComments} /></span>
                    <a className="readmore" href="#">View more <FontAwesomeIcon icon={faArrowCircleRight} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="blog-list-column">
              <div className="post-image">
                <img src="assets/img/post-image3.jpg" className="img-fluid" />
              </div>
              <div className="post_content">
                <div className="date_added">
                  <span className="day">26</span>
                  <span className="day month">Oct</span>
                </div>
                <div className="post-content-rght">
                  <h4><a href="#">Digital Event</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut...</p>
                  <div className="post-info">
                    <span className="comment">03 <FontAwesomeIcon icon={faComments} /></span>
                    <a className="readmore" href="#">View more <FontAwesomeIcon icon={faArrowCircleRight} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}


