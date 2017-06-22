import createLogger from 'redux-logger';

// log actions in development mode
export default createLogger({
  collapsed: true,

  // only log in development mode
  predicate: () => __DEV__,

  // // No longer needed - transform immutable state to plain objects
  // stateTransformer: state,
  //
  // // transform immutable action payloads to plain objects
  // actionTransformer: action =>
  //   action && action.payload && action.payloadtoJS
  //     ? {...action, payload: action.payload}
  //     : action
});
