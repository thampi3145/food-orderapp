import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_HeaderDetails_START,
  GET_HeaderDetails_ERROR,
  GET_HeaderDetails_SUCCESS,
} from 'actions/header';
import headerApi from 'api/header';

// -------- Get component

function createGetHeaderDetails(isServer = false) {
 
  return function* (options) { // eslint-disable-line consistent-return
    try {
       
      const data = yield call(() => headerApi.getHeaderDetails(options.select_id));
      
      const action = { type: GET_HeaderDetails_SUCCESS, data };

      if (isServer) {
        return action;
      }
      
      yield put(action);
    } catch (error) {
      const action = { type: GET_HeaderDetails_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getHeaderDetails = createGetHeaderDetails();



export function* getHeaderDetailsWatcher() {
  
  yield takeLatest(GET_HeaderDetails_START, getHeaderDetails);
}


export default [
  getHeaderDetailsWatcher(),
];
