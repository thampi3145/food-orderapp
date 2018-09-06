import { Map } from 'immutable';

import {
    GET_HtmlRenderDetails_START,
    GET_HtmlRenderDetails_ERROR,
    GET_HtmlRenderDetails_SUCCESS,
  } from 'actions/htmlrender';

  const HtmlRenderDetailsState = Map({
    
    loadingHtmlRenderDetails: false,
    errorHtmlRenderDetails: null,
    HtmlRenderDetails2: null,
  });

  const actionsHtmlRenderDetailsMap = {
    // Async action
    [GET_HtmlRenderDetails_START]: (state, action) => {
      return state.merge(Map({
        loadingHtmlRenderDetails: true,
        errorHtmlRenderDetails: null,
        [action.dynamicProps]: null,
      }));
    },
    [GET_HtmlRenderDetails_ERROR]: (state, action) => {
      return state.merge(Map({
        loadingHtmlRenderDetails: false,
        errorHtmlRenderDetails: action.error.message,
      }));
    },
    [GET_HtmlRenderDetails_SUCCESS]: (state, action) => {
      return state.merge(Map({
        loadingHtmlRenderDetails: false,
        [action.dynamicProps]: action.data,
      }));
    },
  };
  
  export default function reducer(state = HtmlRenderDetailsState, action = {}) {
    const fn = actionsHtmlRenderDetailsMap[action.type];
    return fn ? fn(state, action) : state;
  }