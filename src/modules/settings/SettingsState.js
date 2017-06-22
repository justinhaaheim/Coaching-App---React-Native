/**
  Name:

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

// import {Map} from 'immutable';
// import {loop, Effects} from 'redux-loop-symbol-ponyfill';

// Initial state
const initialState = {
  mleEnabled: false,
  liList: "",
  notificationsEnabled: false,
};

// Actions
const TOGGLE_ARENA_VERSION = "SettingsState/TOGGLE_ARENA_VERSION";
const UPDATE_LI = "SettingsState/UPDATE_LI";
const TOGGLE_NOTIFICATIONS = "SettingsState/TOGGLE_NOTIFICATIONS";

// Action creators
export function toggleArenaVersion() {
  return {
    type: TOGGLE_ARENA_VERSION,
  }
}

export function updateLi(text) {
  return {
    type: UPDATE_LI,
    text
  }
}

export function toggleNotifications() {
  return {
    type: TOGGLE_NOTIFICATIONS,
  }
}

// Reducer
export default function SettingsStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_ARENA_VERSION:
      return Object.assign({}, state, {
        mleEnabled: !state.mleEnabled
      });
    case UPDATE_LI:
      return Object.assign({}, state, {
        liList: action.text
      });
    case TOGGLE_NOTIFICATIONS:
      return Object.assign({}, state, {
        notificationsEnabled: !state.notificationsEnabled
      });
    default:
      return state;
  }
}
