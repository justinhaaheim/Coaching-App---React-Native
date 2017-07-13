import { createLogger } from 'redux-logger';

// log actions in development mode
export default createLogger({
  collapsed: true,
  predicate: () => __DEV__,
});
