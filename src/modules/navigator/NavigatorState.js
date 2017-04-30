import {fromJS} from 'immutable';
import {NavigationActions} from 'react-navigation';
import includes from 'lodash/includes';

import AppNavigator from './Navigator';

// *** This was called NavigatorReducer
export default function NavigatorReducer(state, action) {
  // Initial state
  if (!state) {
    console.log("wtf is going on");
    return fromJS(AppNavigator.router.getStateForAction(action, state));
  }

  // Is this a navigation action that we should act upon?
  if (includes(NavigationActions, action.type)) {
    return fromJS(AppNavigator.router.getStateForAction(action, state.toJS()));
  }

  return state;
}
