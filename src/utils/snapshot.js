import {AsyncStorage} from 'react-native';
import throttle from 'lodash.throttle';

// import {fromJS} from 'immutable';

const STATE_STORAGE_KEY = 'EmpowerAppAppState:Latest';

export async function resetSnapshot() {
  const state = await rehydrate();
  if (state) {
    return state;
  }

  return null;
}

// export function saveSnapshotThrottled(state) {
//   const throttled = throttle(saveSnapshot, 4000);
//   return throttled(state);
// }

export async function saveSnapshot(state) {
  console.log("saving snapshot... ", state);
  await persist(state);
}

export async function clearSnapshot() {
  await clear();
}

/**
 * Saves provided state object to async storage
 *
 * @returns {Promise}
 */
async function persist(state) {
  try {
    await AsyncStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Error persisting application state', e);
  }
}

/**
 * Reads state object from async storage
 *
 * @returns {Promise}
 */
async function rehydrate() {
  try {
    const state = await AsyncStorage.getItem(STATE_STORAGE_KEY);
    return state
      ? JSON.parse(state)
      : null;
  } catch (e) {
    console.error('Error reading persisted application state', e);
    return null;
  }
}

async function clear() {
  try {
    await AsyncStorage.removeItem(STATE_STORAGE_KEY);
  } catch (e) {
    console.error('Error clearing peristed application state', e);
  }
}
