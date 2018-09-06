import { Map } from 'immutable';

import {
    GET_InitialDetails_START,
    GET_InitialDetails_ERROR,
    GET_InitialDetails_SUCCESS,
  } from 'actions/app';

  const initialDetailsState = Map({
    loadingInitialDetails: false,
    errorInitialDetails: null,
    InitialDetails: null,
  });

  const actionsInitialDetailsMap = {
    // Async action
    [GET_InitialDetails_START]: (state) => {
      return state.merge(Map({
        loadingInitialDetails: true,
        errorInitialDetails: null,
        InitialDetails: null,
      }));
    },
    [GET_InitialDetails_ERROR]: (state, action) => {
      return state.merge(Map({
        loadingInitialDetails: false,
        errorInitialDetails: action.error.message,
      }));
    },
    [GET_InitialDetails_SUCCESS]: (state, action) => {
      return state.merge(Map({
        loadingInitialDetails: false,
        InitialDetails: action.data,
      }));
    },
  };
  
  export default function reducer(state = initialDetailsState, action = {}) {
    const fn = actionsInitialDetailsMap[action.type];
    return fn ? fn(state, action) : state;
  }