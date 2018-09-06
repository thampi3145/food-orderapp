import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_InitialDetails_START,
  GET_InitialDetails_ERROR,
  GET_InitialDetails_SUCCESS,
} from 'actions/app';
import appApi from 'api/app';

// -------- Get component

function createGetInitialDetails(isServer = false) {
  
  return function* (options) { // eslint-disable-line consistent-return
    try {
       
      const data = yield call(() => appApi.getInitialDetails(options.domain));
      
      const action = { type: GET_InitialDetails_SUCCESS, data };

      if (isServer) {
        return action;
      }
      
      yield put(action);
    } catch (error) {
      const action = { type: GET_InitialDetails_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getInitialDetails = createGetInitialDetails();



export function* getInitialDetailsWatcher() {
  yield takeLatest(GET_InitialDetails_START, getInitialDetails);
}


export default [
  getInitialDetailsWatcher(),
];
