import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_FooterDetails_START,
  GET_FooterDetails_ERROR,
  GET_FooterDetails_SUCCESS,
} from 'actions/footer';
import footerApi from 'api/footer';

// -------- Get component

function createGetFooterDetails(isServer = false) {
 
  return function* (options) { // eslint-disable-line consistent-return
    try {
       
      const data = yield call(() => footerApi.getFooterDetails(options.select_id));
      
      const action = { type: GET_FooterDetails_SUCCESS, data };

      if (isServer) {
        return action;
      }
      
      yield put(action);
    } catch (error) {
      const action = { type: GET_FooterDetails_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getFooterDetails = createGetFooterDetails();



export function* getFooterDetailsWatcher() {
  
  yield takeLatest(GET_FooterDetails_START, getFooterDetails);
}


export default [
  getFooterDetailsWatcher(),
];
