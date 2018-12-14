import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import TabNav from 'components/secondcontent/TabNav';
import Tab from 'components/secondcontent/Tab';

export default class SecondContent extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <section className="tabbing-column" >
        <div className="container">
          <div className="ltabs-wrap">
            <TabNav />
            <Tab />
          </div>
        </div>
      </section>
    );
  }
}


