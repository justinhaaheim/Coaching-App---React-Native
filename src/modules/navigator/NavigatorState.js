// import {fromJS} from 'immutable';
// import {NavigationActions} from 'react-navigation';
// import includes from 'lodash/includes';

import AppNavigator from './Navigator';

const initialState = fromJS(AppNavigator.router.getStateForAction(
                      AppNavigator.router.getActionForPathAndParams('Home')
                     ));

const NavigatorReducer = (state = initialState, action) => {
  const nextState = fromJS(AppNavigator.router.getStateForAction(action,
                                                                 state.toJS()));

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default NavigatorReducer;

// // *** This was called NavigatorReducer
// export default function NavigatorReducer(state, action) {
//   // Initial state
//   if (!state) {
//     console.log("wtf is going on");
//
//     return fromJS(AppNavigator.router.getStateForAction(
//                           AppNavigator.router
//                             .getActionForPathAndParams('Counter')
//                           ));
//
//     //return fromJS(AppNavigator.router.getStateForAction(action, state));
//   }
//
//   // Is this a navigation action that we should act upon?
//   if (includes(NavigationActions, action.type)) {
//     return fromJS(AppNavigator.router.getStateForAction(action, state.toJS()));
//   }
//
//   return state;
// }
