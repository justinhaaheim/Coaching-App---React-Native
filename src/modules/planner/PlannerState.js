/**
  Name:

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import {Map} from 'immutable';
// import {loop, Effects} from 'redux-loop-symbol-ponyfill';

// Initial state
const initialState = Map({
  mleEnabled: false,
});

// Actions
const TOGGLE_ARENA_VERSION = "SettingsState/TOGGLE_ARENA_VERSION";

// Action creators
export function toggleArenaVersion() {
  return {
    type: TOGGLE_ARENA_VERSION,
  }
}

// Reducer
export default function PlannerStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_ARENA_VERSION:
      console.log("Entered TOGGLE_ARENA_VERSION");
      return state.update('mleEnabled', value => !value);
    default:
      return state;
  }
}
