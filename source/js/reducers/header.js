import { Map } from 'immutable';

import {
    GET_HeaderDetails_START,
    GET_HeaderDetails_ERROR,
    GET_HeaderDetails_SUCCESS,
  } from 'actions/header';

  const headerDetailsState = Map({
    loadingHeaderDetails: false,
    errorHeaderDetails: null,
    HeaderDetails: null,
  });

  const actionsHeaderDetailsMap = {
    // Async action
    [GET_HeaderDetails_START]: (state) => {
      return state.merge(Map({
        loadingHeaderDetails: true,
        errorHeaderDetails: null,
        HeaderDetails: null,
      }));
    },
    [GET_HeaderDetails_ERROR]: (state, action) => {
      return state.merge(Map({
        loadingHeaderDetails: false,
        errorHeaderDetails: action.error.message,
      }));
    },
    [GET_HeaderDetails_SUCCESS]: (state, action) => {
      return state.merge(Map({
        loadingHeaderDetails: false,
        HeaderDetails: action.data,
      }));
    },
  };
  
  export default function reducer(state = headerDetailsState, action = {}) {
    const fn = actionsHeaderDetailsMap[action.type];
    return fn ? fn(state, action) : state;
  }