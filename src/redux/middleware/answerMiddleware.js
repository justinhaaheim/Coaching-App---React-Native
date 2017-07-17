import { Answers } from 'react-native-fabric';

/**
 * Logs all actions and states after they are dispatched.
 */
const reduxAnalytics = store => next => action => {
  Answers.logCustom(action.type);
  const result = next(action);
  // Answers.logCustom(`Next State: ${store.getState()}`);
  return result;
};

export default reduxAnalytics;
