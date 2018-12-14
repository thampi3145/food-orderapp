import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_GirabuyDetails_START,
  GET_GirabuyDetails_ERROR,
  GET_GirabuyDetails_SUCCESS,
} from 'actions/girabuy';
import girabuyApi from 'api/girabuy';


// -------- Get component

function createGetGirabuyDetails(isServer = false) {
 
  return function* (options) { // eslint-disable-line consistent-return
    try {
       
      const data = yield call(() => girabuyApi.getGirabuyDetails(options.form_data));
      
      const action = { type: GET_GirabuyDetails_SUCCESS, data };

      if (isServer) {
        return action;
      }
      
      yield put(action);
    } catch (error) {
      const action = { type: GET_GirabuyDetails_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getGirabuyDetails = createGetGirabuyDetails();



export function* getGirabuyDetailsWatcher() {
  
  yield takeLatest(GET_GirabuyDetails_START, getGirabuyDetails);
}


export default [
  getGirabuyDetailsWatcher(),
];
