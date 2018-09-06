import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHtmlRenderDetails } from 'actions/htmlrender';



@connect( (state, ownProps) => ({
    
    errorHtmlRenderDetails: state.htmlrender.get('errorHtmlRenderDetails'),
    loadingHtmlRenderDetails: state.htmlrender.get('loadingHtmlRenderDetails'),
    HtmlRenderDetails:state.htmlrender.get('HtmlRenderDetails'),
    [ownProps.dynamicProps]:state.htmlrender.get(ownProps.dynamicProps)
  }))

export default class Htmlrender extends Component {

  constructor(props) {
    super(props);
    
  }

    static propTypes = {
        htmlrender: PropTypes.object,
        errorHtmlRenderDetails: PropTypes.string,
        loadingHtmlRenderDetails: PropTypes.bool,
        HtmlRenderDetails: PropTypes.object,
        // from react-redux connect
        dispatch: PropTypes.func,
      }
    
      componentWillMount() {
        const {
          dispatch,
          HtmlRenderDetails,
        } = this.props;
        dispatch(getHtmlRenderDetails(this.props.selected_id,this.props.dynamicProps)); 
      }
    
      render() {
       
        
        if(this.props[this.props.dynamicProps]) {
          
          const html = this.props[this.props.dynamicProps].data.content;
              return <div>{ ReactHtmlParser(html) }</div>;
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
