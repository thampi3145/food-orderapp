import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { getFooterDetails } from 'actions/footer';
import bookImg from 'img/footer-logo.png';

@connect(state => ({
  
  errorFooterDetails: state.footer.get('errorFooterDetails'),
  loadingFooterDetails: state.footer.get('loadingFooterDetails'),
  FooterDetails: state.footer.get('FooterDetails'),
}))

export default class FOOTER extends Component {

  static propTypes = {
    footer: PropTypes.object,
    errorFooterDetails: PropTypes.string,
    loadingFooterDetails: PropTypes.bool,
    FooterDetails: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
   
    const {
      dispatch,
      FooterDetails,
    } = this.props;
    
    dispatch(getFooterDetails(this.props.selected_id)); 
  }
  
  renderFooter() {
    if(this.props.FooterDetails) {
    
    
    return (
      <footer className="section-footer">
      <span data-wow-delay="0.5s" className="footer-left-img wow bounceInLeft"></span>
      <span data-wow-delay="0.5s" className="footer-right-img wow bounceInRight"></span>
      <div className="container">
          <div className="row">
              <div className="col-md-4 col-sm-6 text-center order1">
                  <h4>Take it easy with location</h4>
                  <p className="foo-large">112-Lorem ipsum dolor sit amet,<br /> consectetuer <br />adipiscing elit.. </p>
                  <p>phone: <a href="tel:00000000" title="call us">00 000 000</a> <br />Email: <a href="mailto:support@restaurant.com" title="mail us">support@restaurant.com</a></p>
                  <ul className="foo-social-links">                            
                      <li><a href="#" title="facebook"><span className="facebook"></span></a></li>
                      <li><a href="#" title="google"><span className="google"></span></a></li>
                      <li><a href="#" title="twitter"><span className="twitter"></span></a></li>
                      <li><a href="#" title="linkedin"><span className="linkedin"></span></a></li>
                      <li><a href="#" title="instagram"><span className="instagram"></span></a></li>
                  </ul>
              </div>
              <div className="col-md-4 text-center order3">
                  <h4>Working Hours</h4>                        
                  <p>Monday To Friday </p>
                  <p>8:00am to 10:00pm(Breakfast) <br />11:00am to 10:00pm(Lunch/Diner)</p>
                  <p>Saturday &amp; Sunday</p>
                  <p>10:00am to 11:00pm(Brunch) <br />11:00am to 12:00pm(Lunch/Dinner)</p>
                  <span className="footer-logo"><img src={bookImg} alt="logo" /></span>
              </div>
              <div className="col-md-4 col-sm-6 order2">
                  <h4 className="margin-low">Feedback form</h4>
                  <form>
                      <input type="text" name="name"  placeholder="Name" required/>
                      <input type="email" name="email"  placeholder="Email" required/>
                      <input type="tel" name="tel"  placeholder="Phone" required/>
                      <textarea name="message" placeholder="Message"></textarea>
                      <input type="submit" className="btn" value="Submit"/>
                  </form>
              </div>
          </div>
      </div>
      <div className="copyright">
          <div className="container text-center">
              <p>{this.props.FooterDetails.data.copy_rights}</p>
          </div>
      </div>
  </footer>
    );
  }
  }
    
  render() {
    
   
    if(this.props.FooterDetails) {
   return (
    
      <footer>
      {this.renderFooter()}
      </footer>
      
     
   );
 }
 else {
   return (
    
    <div className="adjust loaderbackground">
               <div className="loader"></div>
            </div>

   );
 }
}
}
