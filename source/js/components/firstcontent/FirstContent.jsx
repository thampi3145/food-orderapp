import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import ItemIcon from 'components/firstcontent/ItemIcon';
import ImageBlock from 'components/firstcontent/ImageBlock';
import FeaturedProduct from 'components/firstcontent/FeaturedProduct';

export default class FirstContent extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <section className="main-content pad-top0" >
        <div className="container">
          <ItemIcon />
          <ImageBlock />
          <FeaturedProduct />
        </div>
      </section>
    );
  }
}


