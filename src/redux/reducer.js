// import {Map, fromJS} from 'immutable';
// import {loop, combineReducers} from 'redux-loop-symbol-ponyfill';

import { combineReducers } from 'redux';
// import NavigatorReducer from '../modules/navigator/NavigatorState';
import CounterStateReducer from '../modules/counter/CounterState';
import SessionStateReducer, {RESET_STATE} from '../modules/session/SessionState';
import SettingsStateReducer from '../modules/settings/SettingsState';
import PlannerStateReducer from '../modules/planner/PlannerState';
import ArenaStateReducer from '../modules/arena/ArenaState';

const reducers = {

  arena: ArenaStateReducer,

  // Counter sample app state. This can be removed in a live application
//  counter: CounterStateReducer,

  // // Navigator states
  // navigatorState: NavigatorReducer,

  planner: PlannerStateReducer,

  session: SessionStateReducer,

  settings: SettingsStateReducer

};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
// const immutableStateContainer = Map();
// const getImmutable = (child, key) => child ? child.get(key) : void 0;
// const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers
  // {},
  // TODO: do we need the rest of these: ??
  // immutableStateContainer,
  // getImmutable,
  // setImmutable
);

export default function mainReducer(state, action) {
  const nextState = action.type === RESET_STATE
    ? namespacedReducer(action.payload, action)
    : namespacedReducer(state || void 0, action);

  return nextState;
}
