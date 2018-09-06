import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { getHeaderDetails } from 'actions/header';


@connect(state => ({
  
  errorHeaderDetails: state.header.get('errorHeaderDetails'),
  loadingHeaderDetails: state.header.get('loadingHeaderDetails'),
  HeaderDetails: state.header.get('HeaderDetails'),
}))

export default class HEADER extends Component {

  static propTypes = {
    header: PropTypes.object,
    errorHeaderDetails: PropTypes.string,
    loadingHeaderDetails: PropTypes.bool,
    HeaderDetails: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
   
    const {
      dispatch,
      HeaderDetails,
    } = this.props;
    
    dispatch(getHeaderDetails(this.props.selected_id)); 
  }

  
  renderHeader() {
   
    if(this.props.HeaderDetails) {
    console.log("gggg"+JSON.stringify(this.props.HeaderDetails));
    return (
      <div>
      <header className="header">
      <div className="contact-detail">
          <div className="container">
              <ul>
                  <li><span className="clock"></span>{this.props.HeaderDetails.data.title}</li>
                  <li><span className="phone"></span><a href="tel:00000000000" title="Call us">{this.props.HeaderDetails.data.contact_no}</a></li>
                  <li className="social-links">
                      <a href="#" title="facebook"><span className="facebook"></span></a>
                      <a href="#" title="google"><span className="google"></span></a>
                      <a href="#" title="twitter"><span className="twitter"></span></a>
                      <a href="#" title="linkedin"><span className="linkedin"></span></a>
                      <a href="#" title="instagram"><span className="instagram"></span></a>
                  </li>
              </ul>
          </div>
      </div>
      <nav>
          <div className="container">
              <div className="header-links">
                  <a href="#" title="Restaurent Food and Drinks" className="header-logo wow bounceInDown"><img src={this.props.HeaderDetails.data.logo} alt="logo" /></a>
                  <ul className="enumenu_ul menu">
                      <li><a href="#" title="Reservations" className="btn">Reservations</a></li>
                  </ul>
              </div>
          </div> 
      </nav>
  </header>        

  
  </div>
    );
  }
  }

  

  render() {
    
   
    if(this.props.HeaderDetails) {
   return (
   
      
      this.renderHeader()
      
      
     
   );
 }
 else {
   return (
     <div>
    <div className="adjust loaderbackground">
               <div className="loader"></div>
            </div>
</div>
   );
 }
}
}
