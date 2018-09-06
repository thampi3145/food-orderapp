import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import LOADER from 'components/global/loader';
import DASHBOARD from 'components/global/dashboard'
import { getInitialDetails } from 'actions/app';

@connect(state => ({
  
  errorInitialDetails: state.app.get('errorInitialDetails'),
  loadingInitialDetails: state.app.get('loadingInitialDetails'),
  InitialDetails: state.app.get('InitialDetails'),
}))
export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    
    errorInitialDetails: PropTypes.string,
    loadingInitialDetails: PropTypes.bool,
    InitialDetails: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
   
    const {
      dispatch,
      InitialDetails,
    } = this.props;
    dispatch(getInitialDetails('r1.tecgroup.ch'));
  }

 
 
 
 

  render() {
    
     
     if(this.props.InitialDetails) {
    return (
      <div>
       <DASHBOARD InitialDetails={this.props.InitialDetails}/>
         
       
       
      </div>
    );
  }
  else {
    return (
      <div>  
     <LOADER/>
</div>
    );
  }
}
}


