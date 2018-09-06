import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';



export default class DASHBOARD extends Component {

    constructor(props) {
        super(props);
        this.state = {
          components: []
        };
      }

      async componentDidMount() {
        const dyncomponent = this.props.InitialDetails.data.index.components.list;
        
                  dyncomponent.map(async type => await this.addComponent(type));
      }

      async addComponent(type) {
        try {
         
        const lazycomp = await import(`components/global/${type.react_name}`);
      
   
        let props = {key:type.sort+1,selected_id:type.selectedComponet,dynamicProps:`c${type.sort}`};
      
        this.setState({
          components: this.state.components.concat(React.createElement(lazycomp.default,props))
        })
      }
      catch(err) {
        this.setState({components:<div>{'failed to load component'}</div>});
      }
      };



  render() {
    
    return (
      <div>
         {_.orderBy(this.state.components, ['key'],['asc'])}
      
      </div>
     


    );
  }
}
