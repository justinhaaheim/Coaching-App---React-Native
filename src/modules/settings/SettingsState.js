// Initial state
const initialState = {
  mleEnabled: false,
  liList: '',
  notificationsEnabled: false,
  introComplete: false,
};

// Actions
const TOGGLE_ARENA_VERSION = 'SettingsState/TOGGLE_ARENA_VERSION';
const UPDATE_LI = 'SettingsState/UPDATE_LI';
const TOGGLE_NOTIFICATIONS = 'SettingsState/TOGGLE_NOTIFICATIONS';
const SET_INTRO_STATUS = 'SettingsState/SET_INTRO_STATUS';

// Action creators
export function toggleArenaVersion() {
  return {
    type: TOGGLE_ARENA_VERSION,
  };
}

export function updateLi(text) {
  return {
    type: UPDATE_LI,
    text,
  };
}

export function toggleNotifications() {
  return {
    type: TOGGLE_NOTIFICATIONS,
  };
}

export function setIntroStatus(status) {
  return {
    type: SET_INTRO_STATUS,
    payload: status,
  };
}

// Reducer
export default function SettingsStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_ARENA_VERSION:
      return Object.assign({}, state, {
        mleEnabled: !state.mleEnabled,
      });
    case UPDATE_LI:
      return Object.assign({}, state, {
        liList: action.text,
      });
    case TOGGLE_NOTIFICATIONS:
      return Object.assign({}, state, {
        notificationsEnabled: !state.notificationsEnabled,
      });
    case SET_INTRO_STATUS:
      return Object.assign({}, state, {
        introComplete: action.payload,
      });
    default:
      return state;
  }
}
