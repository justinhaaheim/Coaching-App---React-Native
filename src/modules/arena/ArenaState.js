/**
  Name:

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

// import { Map } from "immutable";

// Initial state
const initialState = {
  buttons: [
    { name: 'Alert', selected: false },
    { name: 'Attentive', selected: false },
    { name: 'Appreciative', selected: false },
    { name: 'Clear', selected: false },
    { name: 'Compassionate', selected: false },
    { name: 'Courageous', selected: false },
    { name: 'Creative', selected: false },
    { name: 'Empowering', selected: false },
    { name: 'Enthusiastic', selected: false },
    { name: 'Flexible', selected: false },
    { name: 'Focused', selected: false },
    { name: 'Generous', selected: false },
    { name: 'Gentle', selected: false },
    { name: 'Grateful', selected: false },
    { name: 'Joyous', selected: false },
    { name: 'Kind', selected: false },
    { name: 'Loving', selected: false },
    { name: 'Open', selected: false },
    { name: 'Present', selected: false },
    { name: 'Receptive', selected: false },
    { name: 'Supportive', selected: false },
    { name: 'Truthful', selected: false },
    { name: 'Vulnerable', selected: false },
  ],
};

// Actions
const TOGGLE_BUTTON = 'ArenaState/TOGGLE_BUTTON';
const RESET_ARENA = 'ArenaState/RESET';

// Action creators
export function toggleButton(index) {
  return {
    type: TOGGLE_BUTTON,
    payload: index,
  };
}

export function resetArena() {
  return { type: RESET_ARENA };
}

// Reducer
export default function ArenaStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET_ARENA: {
      return initialState;
    }
    case TOGGLE_BUTTON: {
      const newButtons = state.buttons.map(
        (bttn, index) =>
          index === action.payload ? Object.assign({}, bttn, { selected: !bttn.selected }) : bttn,
      );

      // If the change would result in >= 5 buttons, return state unmodified
      if (!state.buttons[action.payload].selected) {
        if (state.buttons.filter(b => b.selected).length >= 5) {
          return state;
        }
      }

      return Object.assign({}, state, {
        buttons: newButtons,
      });
    }
    default: {
      return state;
    }
  }
}

// Selectors
export const getQualitiesList = state => state.buttons.filter(b => b.selected).map(b => b.name);
