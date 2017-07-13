import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import ArenaView from '../ArenaView';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <ArenaView
        mleEnabled
        arenaStateActions={{
          toggleButton: () => 'Toggle Button',
          resetArena: () => 'Reset Arena',
        }}
        qualitiesList={['Test Word']}
        buttons={[{ name: 'Test Button', selected: false }]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
