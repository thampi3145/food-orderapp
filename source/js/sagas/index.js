import { all } from 'redux-saga/effects';

import headerSagas from 'sagas/header';

import appSagas from 'sagas/app';
import sliderSagas from 'sagas/slider';
import footerSagas from 'sagas/footer';
import htmlrender from 'sagas/htmlrender';
import girabuy from 'sagas/girabuy';

export default function* rootSaga() {
  yield all([
    ...appSagas,
    ...headerSagas,
    ...sliderSagas,
    ...footerSagas,
    ...htmlrender,
    ...girabuy
   
  ]);
}
