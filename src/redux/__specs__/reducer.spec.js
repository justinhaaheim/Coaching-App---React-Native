/* eslint-disable max-nested-callbacks, no-unused-expressions*/

import { initialState, dispatch } from '../../../support/test/state';
import * as SessionState from '../../modules/session/SessionState';
import { toggleButton } from '../../modules/arena/ArenaState';

describe('reducer', () => {
  describe('mainReducer', () => {
    it('resets state with RESET_STATE action given a snapshot', () => {
      const snapshotMock = dispatch(initialState, toggleButton(0));
      const resetStateAction = SessionState.resetSessionStateFromSnapshot(snapshotMock);

      const statePostReset = dispatch(initialState, resetStateAction);

      expect(initialState.arena.buttons[0].selected).toBe(false);
      expect(statePostReset.arena.buttons[0].selected).toBe(true);
    });
  });
});
