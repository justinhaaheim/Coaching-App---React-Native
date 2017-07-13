import { combineReducers } from 'redux';

import SessionStateReducer, { RESET_STATE } from '../modules/session/SessionState';
import SettingsStateReducer from '../modules/settings/SettingsState';
import ArenaStateReducer, * as fromArenaState from '../modules/arena/ArenaState';

const reducers = {
  arena: ArenaStateReducer,

  session: SessionStateReducer,

  settings: SettingsStateReducer,
};

const namespacedReducer = combineReducers(reducers);

// TODO: this is a dangerous way to do rehydrate the store. If we change the
// shape of our store, it will likely get overwritten by the snapshot store.
// Find a way to validate the store that is loaded from async storage.
export default function mainReducer(state, action) {
  const nextState =
    action.type === RESET_STATE
      ? namespacedReducer(action.payload, action)
      : namespacedReducer(state || void 0, action);

  return nextState;
}

// Global Selectors
// this arrangement allows us to keep functions that depend on the structure
// of the store in the same file where they're defined.
export const getQualitiesList = state => fromArenaState.getQualitiesList(state.arena);
