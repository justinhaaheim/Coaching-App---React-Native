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
    {name: 'Alert', selected: false},
    {name: 'Attentive', selected: false},
    {name: 'Appreciative', selected: false},
    {name: 'Clear', selected: false},
    {name: 'Compassionate', selected: false},
    {name: 'Courageous', selected: false},
    {name: 'Creative', selected: false},
    {name: 'Empowering', selected: false},
    {name: 'Enthusiastic', selected: false},
    {name: 'Flexible', selected: false},
    {name: 'Focused', selected: false},
    {name: 'Generous', selected: false},
    {name: 'Gentle', selected: false},
    {name: 'Grateful', selected: false},
    {name: 'Joyous', selected: false},
    {name: 'Kind', selected: false},
    {name: 'Loving', selected: false},
    {name: 'Open', selected: false},
    {name: 'Present', selected: false},
    {name: 'Receptive', selected: false},
    {name: 'Supportive', selected: false},
    {name: 'Truthful', selected: false},
    {name: 'Vulnerable', selected: false},
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
    // case TOGGLE_BUTTON:
    //   console.log("TOGGLE_BUTTON action is being taken.");
    //   console.log(`action.type=${action.type} and action.payload=${action.payload}`);
    //   // payload is an index into the button array
    //   // Does this need to be .getIn(['arena', 'buttons'])?
    //   const buttons = state.get('buttons');
    //
    //   if (buttons.filter(b => b.selected).length >= 5) {
    //     return state;
    //   }
    //
    //   if (state.getIn(['buttons', action.payload, 'selected'])) {
    //     return state.updateIn(['buttons', action.payload, 'selected'], false);
    //   } else {
    //     return state.updateIn(['buttons', action.payload, 'selected'], true);
    //   }
    default:
      return state;
  }
}
