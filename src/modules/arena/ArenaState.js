/**
  Name:

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import {Map} from 'immutable';

// Initial state
const initialState = Map({
  buttons: [
    'Alert': { 'selected': false },
    'Attentive': { 'selected': false },
    'Appreciative': { 'selected': false },
    'Clear': { 'selected': false },
    'Compassionate': { 'selected': false },
    'Courageous': { 'selected': false },
    'Creative': { 'selected': false },
    'Empowering': { 'selected': false },
    'Enthusiastic': { 'selected': false },
    'Flexible': { 'selected': false },
    'Focused': { 'selected': false },
    'Generous': { 'selected': false },
    'Gentle': { 'selected': false },
    'Grateful': { 'selected': false },
    'Joyous': { 'selected': false },
    'Kind': { 'selected': false },
    'Loving': { 'selected': false },
    'Open': { 'selected': false },
    'Present': { 'selected': false },
    'Receptive': { 'selected': false },
    'Supportive': { 'selected': false },
    'Truthful': { 'selected': false },
    'Vulnerable': { 'selected': false }
  ]
});

// Actions
const TOGGLE_BUTTON = 'ArenaState/TOGGLE_BUTTON';
const RESET = 'ArenaState/RESET';

// Action creators
export function toggleButton(name) {
  return {
    type: TOGGLE_BUTTON,
    payload: name
  };
}

export function reset() {
  return {type: RESET};
}

// Reducer
export default function ArenaStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case RESET:
      return initialState;

    case TOGGLE_BUTTON:
      // Does this need to be .getIn(['arena', 'buttons'])?
      const buttons = state.get('buttons');

      if (buttons.filter(b => b.selected).length >= 5) {
        return state;
      }

      if (state.getIn(['buttons', action.payload, 'selected'])) {
        return state.setIn(['buttons', action.payload, 'selected'], false);
      } else {
        return state.setIn(['buttons', action.payload, 'selected'], true);
      }

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
