/**
 * Name: app/config/router.js
 *
 * Description: This file defines the navigation for the app.
 *
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.txt', which is part of this source code package.
 */

 import React from 'react';
 import { TabNavigator, StackNavigator } from 'react-navigation';
 import { Icon } from 'react-native-elements';

 import Settings from '../scenes/Settings';
 import ArenaScene from '../scenes/ArenaScene';

 export const Tabs = TabNavigator({
  Arena: {
    screen: ArenaScene,
    navigationOptions: {
      tabBar: {
        label: 'Arena',
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBar: {
        label: 'Settings',
        icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },
});
