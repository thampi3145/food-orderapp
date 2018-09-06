import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_SliderDetails_START,
  GET_SliderDetails_ERROR,
  GET_SliderDetails_SUCCESS,
} from 'actions/slider';
import sliderApi from 'api/slider';

// -------- Get component

function createGetSliderDetails(isServer = false) {
 
  return function* (options) { // eslint-disable-line consistent-return
    try {
       
      const data = yield call(() => sliderApi.getSliderDetails(options.select_id));
      
      const action = { type: GET_SliderDetails_SUCCESS, data };

      if (isServer) {
        return action;
      }
      
      yield put(action);
    } catch (error) {
      const action = { type: GET_SliderDetails_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getSliderDetails = createGetSliderDetails();



export function* getSliderDetailsWatcher() {
  
  yield takeLatest(GET_SliderDetails_START, getSliderDetails);
}


export default [
  getSliderDetailsWatcher(),
];
