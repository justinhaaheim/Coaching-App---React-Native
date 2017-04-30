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
  arenaVersion: 'client'
});

// Actions
const SET_ARENA_VERSION = 'SettingsState/SET_ARENA_VERSION';

// Action creators
export function setArenaVersion(ver = 'client') {
  return {
    type: SET_ARENA_VERSION,
    payload: ver
  };
}

// Reducer
export default function SettingsStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ARENA_VERSION:
      return state.set('arenaVersion', action.payload);
    default:
      return state;
  }
}
