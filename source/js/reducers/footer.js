import { Map } from 'immutable';

import {
    GET_FooterDetails_START,
    GET_FooterDetails_ERROR,
    GET_FooterDetails_SUCCESS,
  } from 'actions/footer';

  const footerDetailsState = Map({
    loadingFooterDetails: false,
    errorFooterDetails: null,
    FooterDetails: null,
  });

  const actionsFooterDetailsMap = {
    // Async action
    [GET_FooterDetails_START]: (state) => {
      return state.merge(Map({
        loadingFooterDetails: true,
        errorFooterDetails: null,
        FooterDetails: null,
      }));
    },
    [GET_FooterDetails_ERROR]: (state, action) => {
      return state.merge(Map({
        loadingFooterDetails: false,
        errorFooterDetails: action.error.message,
      }));
    },
    [GET_FooterDetails_SUCCESS]: (state, action) => {
      return state.merge(Map({
        loadingFooterDetails: false,
        FooterDetails: action.data,
      }));
    },
  };
  
  export default function reducer(state = footerDetailsState, action = {}) {
    const fn = actionsFooterDetailsMap[action.type];
    return fn ? fn(state, action) : state;
  }