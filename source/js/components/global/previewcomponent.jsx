import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Url_StringfyParam } from 'helpers/functions';



export default class PREVIEWCOMPONENT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: []
    };
  }

  async componentDidMount() {
    try {
      const paramslist = Url_StringfyParam(this.props.location.search);
      const lazycomp = await import(`components/global/${paramslist.react_name}`);
        
        
        let props = {key:paramslist.id,selected_id:paramslist.selectedComponet};  
      this.setState({
        components: this.state.components.concat(React.createElement(lazycomp.default,props))
      })
    }
    catch(err) {
      this.setState({components:<div>{'failed to load component'}</div>});
    }
  }

  



render() {
return (
  <div>
     
     {_.orderBy(this.state.components, ['key'],['asc'])}
  
  </div>
 


);
}
}
