import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/loggerMiddleware';

export default [
  promiseMiddleware,
  thunkMiddleware,
  loggerMiddleware,
];
