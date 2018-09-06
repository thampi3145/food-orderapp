import { Map } from 'immutable';

import {
    GET_SliderDetails_START,
    GET_SliderDetails_ERROR,
    GET_SliderDetails_SUCCESS,
  } from 'actions/slider';

  const sliderDetailsState = Map({
    loadingSliderDetails: false,
    errorSliderDetails: null,
    SliderDetails: null,
  });

  const actionsSliderDetailsMap = {
    // Async action
    [GET_SliderDetails_START]: (state) => {
      return state.merge(Map({
        loadingSliderDetails: true,
        errorSliderDetails: null,
        SliderDetails: null,
      }));
    },
    [GET_SliderDetails_ERROR]: (state, action) => {
      return state.merge(Map({
        loadingSliderDetails: false,
        errorSliderDetails: action.error.message,
      }));
    },
    [GET_SliderDetails_SUCCESS]: (state, action) => {
      return state.merge(Map({
        loadingSliderDetails: false,
        SliderDetails: action.data,
      }));
    },
  };
  
  export default function reducer(state = sliderDetailsState, action = {}) {
    const fn = actionsSliderDetailsMap[action.type];
    return fn ? fn(state, action) : state;
  }