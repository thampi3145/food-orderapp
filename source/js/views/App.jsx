import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import Home from 'views/Home'
import Login from 'views/Auth/Login';
import Register from 'views/Auth/Register';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/' component={Home}/>          
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
