import { Map } from 'immutable';

import {
    GET_GirabuyDetails_START,
    GET_GirabuyDetails_ERROR,
    GET_GirabuyDetails_SUCCESS,
  } from 'actions/girabuy';

  const girabuyDetailsState = Map({
    loadingGirabuyDetails: false,
    errorGirabuyDetails: null,
    GirabuyDetails: null,
  });

  const actionsGirabuyDetailsMap = {
    // Async action
    [GET_GirabuyDetails_START]: (state) => {
      return state.merge(Map({
        loadingGirabuyDetails: true,
        errorGirabuyDetails: null,
        GirabuyDetails: null,
      }));
    },
    [GET_GirabuyDetails_ERROR]: (state, action) => {
        console.log("aaa");
      return state.merge(Map({
        loadingGirabuyDetails: false,
        errorGirabuyDetails: action.error.message,
      }));
    },
    [GET_GirabuyDetails_SUCCESS]: (state, action) => {
      return state.merge(Map({
        loadingGirabuyDetails: false,
        GirabuyDetails: action.data,
      }));
    },
  };
  
  export default function reducer(state = girabuyDetailsState, action = {}) {
      
    const fn = actionsGirabuyDetailsMap[action.type];
    return fn ? fn(state, action) : state;
  }