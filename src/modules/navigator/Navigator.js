import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import SettingsViewContainer from '../settings/SettingsViewContainer';
import ArenaViewContainer from '../arena/ArenaViewContainer';
import LiViewContainer from '../li/LiViewContainer';
import LiEntry from '../settings/LiEntry';
import Credits from '../settings/Credits';
// import IntroViewContainer from '../intro/IntroViewContainer';

const headerColor = '#39babd';
const activeColor = 'white';

const SettingsNavigator = StackNavigator({
  Main: {
    screen: SettingsViewContainer,
    navigationOptions: {
      title: 'Settings',
      headerStyle: {
        backgroundColor: '#f7f7f8',
      },
    },
  },

  LiEntry: {
    screen: LiEntry,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
      headerStyle: {
        backgroundColor: '#f7f7f8',
      },
    }),
  },

  Credits: {
    screen: Credits,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f7f7f8',
      },
    }
  },
});

const AppNavigator = TabNavigator(
  {
    Arena: {
      screen: StackNavigator({
        Arena: {
          screen: ArenaViewContainer,
          navigationOptions: {
            headerStyle: {
              backgroundColor: '#f7f7f8',
            },
          }
        },
      }),
      navigationOptions: {
        tabBarIcon: props =>
          <Ionicon name="ios-list-box-outline" size={24} color={props.tintColor} />,
      },
    },

    Li: {
      screen: StackNavigator({
        Li: {
          screen: LiViewContainer,
          navigationOptions: {
            headerStyle: {
              backgroundColor: '#f7f7f8',
            },
          }
        },
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) =>
          <Ionicon name={focused ? 'ios-body' : 'ios-body'} size={24} color={tintColor} />,
      },
    },

    Settings: {
      screen: SettingsNavigator,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) =>
          <MaterialIcon name={focused ? 'settings' : 'settings'} size={24} color={tintColor} />,
      },
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      ...Platform.select({
        android: {
          activeTintColor: activeColor,
          indicatorStyle: {
            backgroundColor: activeColor,
          },
          style: {
            backgroundColor: headerColor,
          },
        },
      }),
    },
  },
);

// const AppIntroNavigator = StackNavigator({
//   Main: {
//     screen: AppTabNavigator,
//     headerMode: 'none',
//     // navigationOptions: {
//     //   title: 'Settings',
//     // },
//   },
//   IntroScreen: {
//     screen: IntroViewContainer,
//     mode: 'modal',
//     headerMode: 'none',
//     // navigationOptions: ({ navigation }) => ({ title: `${navigation.state.params.title}` }),
//   },
// });
//
// export default AppIntroNavigator;

export default AppNavigator;
