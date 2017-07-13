import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import SettingsView from '../SettingsView';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <SettingsView
        mleEnabled={false}
        notificationsEnabled={false}
        settingsStateActions={{
          toggleArenaVersion: () => 'Toggle Arena Version',
          toggleNotifications: () => 'Toggle Notifications',
        }}
        navigation={{
          navigate: () => 'Navigate'
        }}
        buttons={[{ name: 'Test Button', selected: false }]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
