import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import loggerMiddleware from './middleware/loggerMiddleware';
import screenTracking from './middleware/screenTracking';
import actionTracking from './middleware/actionTracking';

export default [
  promiseMiddleware,
  thunkMiddleware,
  loggerMiddleware,
  screenTracking,
  actionTracking,
];
