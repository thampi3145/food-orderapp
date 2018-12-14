import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Redirect, Link} from "react-router-dom";

import { ValidationForm, TextInput, TextInputGroup} from "react-bootstrap4-form-validation";

import Header from 'views/Header';
import BrandLogo from 'components/thirdcontent/BrandLogo';
import Footer from 'views/Footer';

import { getGirabuy } from 'actions/girabuy';

@connect(state => ({
  
  errorGirabuyDetails: state.girabuy.get('errorGirabuyDetails'),
  loadingGirabuyDetails: state.girabuy.get('loadingGirabuyDetails'),
  GirabuyloginDetails: state.girabuy.get('GirabuyDetails'),
}))

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.state = {
      loginId: '',
      password: '',
      immediate:true,
      setFocusOnError:true,
      clearInputOnReset:false,
      apiaction:'login'
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  static propTypes = {
    girabuy: PropTypes.object,
    errorGirabuyDetails: PropTypes.string,
    loadingGirabuyDetails: PropTypes.bool,
    GirabuyloginDetails: PropTypes.object,
    dispatch: PropTypes.func,
  }

  loginClick = (e) => {
    const {
      dispatch,
      GirabuyloginDetails
    } = this.props;
    dispatch(getGirabuy(this.state));
     e.preventDefault();
  };


  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }
 
  render() {
    if(this.props.GirabuyloginDetails) {
      let giratoken = ((this.props.GirabuyloginDetails) && (this.props.GirabuyloginDetails.message))?this.props.GirabuyloginDetails.token:'';
      localStorage.setItem('giratoken', giratoken);
      return <Redirect to='/'/>;
    }
    
    return (
      <div className="wrapper">
        <Header />
        <section className="inner-page-container pad-top0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>CUSTOMER LOGIN</h2>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="login-fieldset">
                  <legend>Registered Customers</legend>
                  <ValidationForm onSubmit={this.loginClick}
                  ref={this.formRef}
                  immediate={this.state.immediate}
                  setFocusOnError={this.state.setFocusOnError}
                  defaultErrorMessage={{ required: "Please enter something."}}>
                    <div className="row">
                      <div className="col-12">
                        <p className="login-p">If you have an account, sign in with your email address.</p>
                      </div>
                      <div className="col-12">
                        <div className="form-group required">
                          <label htmlFor="inputEmail" className="control-label">Email</label>
                          <TextInput type="email" id="loginId" name="loginId" className="form-control" onChange={this.handleInputChange}  placeholder="Email address" required autoFocus />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group required">
                          <label htmlFor="inputPassword" className="control-label">Password</label>
                          <TextInput type="password" id="password" name="password" className="form-control" onChange={this.handleInputChange}  placeholder="Password" required autoFocus/>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group checlbox" value="remember-me">
                          <input type="checkbox"  />
                          <label>Remember Password</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="pull-left">
                          <button type="submit" className="default-btn">Login</button>
                        </div>
                        <div className="pull-right mt-2">
                          <a href="#" className="link-color">Forgot your password?</a>
                        </div>
                      </div>
                      <div class="col-12 req-field-text">
                        <span>* Required Fields</span>
                      </div>
                    </div>
                  </ValidationForm>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="login-fieldset">
                  <legend>New Customers</legend>
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <p className="login-p">Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                      </div>
                      <div className="col-12 mt-2">
                        <Link to={`/register`} activeClassName="current">Create an Account</Link>
                      </div>
                    </div>
                  </form>
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