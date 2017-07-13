import { applyMiddleware, createStore, compose } from 'redux';
import middleware from './middleware';
import reducer from './reducer';

const enhancers = [applyMiddleware(...middleware)];

// Enable redux dev tools only in development.
/* eslint-disable no-undef */
const composeEnhancers = (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(reducer, enhancer);

export default store;
