import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Previewcomponent from 'components/global/previewcomponent';
import Home from 'views/Home'

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
     
    return (
      <div>
      <Switch>
            <Route exact path='/' component={Home}/>          
            <Route exact path='/component' component={Previewcomponent}/>
    </Switch>
      </div>
    );
 
  
}
}

export default hot(module)(App);
