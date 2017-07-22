import { NavigationActions } from 'react-navigation';
import includes from 'lodash/includes';
import AppNavigator from './Navigator';

export default function NavigatorReducer(state, action) {
  // Initial state
  if (!state) {
    return AppNavigator.router.getStateForAction(action, state);
  }

  // Is this a navigation action that we should act upon?
  // TODO: (Is checking this necessary??)
  if (includes(NavigationActions, action.type)) {
    const result = AppNavigator.router.getStateForAction(action, state);
    console.log(result);
    if (result) {
      return result
    }
    // There has been some problem. Reset the state.
    return AppNavigator.router.getStateForAction(action);
  }

  return state;
}
