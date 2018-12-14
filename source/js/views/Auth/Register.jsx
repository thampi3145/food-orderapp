import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Link} from "react-router-dom";

import Header from 'views/Header';
import BrandLogo from 'components/thirdcontent/BrandLogo';
import Footer from 'views/Footer';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="wrapper">
        <Header />

        <section className="inner-page-container pad-top0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Create New Customer Account</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="login-fieldset">
                  <legend>Personal Information</legend>
                  <form>
                    <div className="row">
                      <div className="col-lg-6 col-xl-12">
                        <div className="form-group required">
                          <label for="inputEmail" className="control-label">First Name</label>
                          <input type="fname" id="firstname" className="form-control" required autofocus />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-12">
                        <div className="form-group required">
                          <label for="inputEmail" className="control-label">Last Name</label>
                          <input type="lname" id="lastname" className="form-control" required autofocus />
                        </div>
                      </div>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                      <label className="form-check-label" for="defaultCheck1" >
                        Sign Up for Newsletter
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="login-fieldset">
                  <legend>Sign-in Information</legend>
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group required">
                          <label for="inputEmail" className="control-label">Email</label>
                          <input type="fname" id="firstname" className="form-control" required autofocus /> </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group required">
                          <label for="inputEmail" className="control-label">Password</label>
                          <input type="lname" id="lastname" className="form-control" required autofocus />
                          <div className="password-strength-meter">
                            Password Strength:
                            <span>No Password</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group required">
                          <label for="inputEmail" className="control-label">Confirm Password</label>
                          <input type="lname" id="lastname" className="form-control" required autofocus />
                        </div>
                      </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                        <label className="form-check-label" for="defaultCheck2" >
                          I am a company and i want to sell
                        </label>
                      </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="actions-toolbar">
                  <div className="pull-left">
                    <button type="submit" className="default-btn">Create an Account</button>
                  </div>
                  <div className="pull-right mt-2">
                    <Link to={`/register`} activeClassName="current" className="link-color">Back to register or connect an account</Link>
                  </div>
                </div>
              </div>
            </div>
          
            <BrandLogo />

          </div>
        </section>

        <Footer />
      </div>
    );
  }
}