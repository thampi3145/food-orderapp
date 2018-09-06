import { takeEvery, call, put } from 'redux-saga/effects';

import {
  GET_HtmlRenderDetails_START,
  GET_HtmlRenderDetails_ERROR,
  GET_HtmlRenderDetails_SUCCESS,
} from 'actions/htmlrender';
import htmlrenderApi from 'api/htmlrender';

// -------- Get component

function createGetHtmlRenderDetails(isServer = false) {
 
  return function* (options) { // eslint-disable-line consistent-return
    try {
      
     // const data = [];
      const data = yield call(() => htmlrenderApi.getHtmlRenderDetails(options.select_id));
      
   
      const action = { type: GET_HtmlRenderDetails_SUCCESS,dynamicProps:options.dynamicProps, data };
      if (isServer) {
        return action;
      }
      
      yield put(action);
    } catch (error) {
      const action = { type: GET_HtmlRenderDetails_ERROR,dynamicProps:options.dynamicProps, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getHtmlRenderDetails = createGetHtmlRenderDetails();



export function* getHtmlRenderDetailsWatcher() {
  
  yield takeEvery(GET_HtmlRenderDetails_START, getHtmlRenderDetails);
}


export default [
  getHtmlRenderDetailsWatcher(),
];
