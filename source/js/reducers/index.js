import { combineReducers } from 'redux';
import app from 'reducers/app';
import header from 'reducers/header';
import footer from 'reducers/footer';
import slider from 'reducers/slider';
import htmlrender from 'reducers/htmlrender';
import girabuy from 'reducers/girabuy';

export default combineReducers({
  app,
  header,
  slider,
  footer,
  htmlrender,
  girabuy
});
