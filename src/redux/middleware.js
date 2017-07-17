import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/loggerMiddleware';
import reduxAnalytics from './middleware/answerMiddleware';

export default [
  promiseMiddleware,
  thunkMiddleware,
  loggerMiddleware,
  reduxAnalytics,
];
