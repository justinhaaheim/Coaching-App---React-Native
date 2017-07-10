import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import IntroViewContainer from '../intro/IntroViewContainer';
import SettingsViewContainer from '../settings/SettingsViewContainer';
import ArenaViewContainer from '../arena/ArenaViewContainer';
import PlannerViewContainer from '../planner/PlannerViewContainer';
import LiViewContainer from '../li/LiViewContainer';
import TextEntry from '../../components/TextEntry';
import Credits from '../settings/Credits';

const headerColor = '#39babd';
const activeColor = 'white';

const SettingsNavigator = StackNavigator({
  Main: {
    screen: SettingsViewContainer,
    navigationOptions: {
      title: 'Settings',
    },
  },

  LiEntry: {
    screen: TextEntry,
    navigationOptions: ({ navigation }) => ({ title: `${navigation.state.params.title}` }),
  },

  Credits: {
    screen: Credits,
  },
});

// SettingsNavigator.navigationOptions = {
//   tabBarIcon: ({ tintColor }) =>
//     (<MaterialIcon name="settings" size={24} color={tintColor} />)
// }

const AppTabNavigator = TabNavigator(
  {
    Arena: {
      screen: StackNavigator({
        default: {
          screen: ArenaViewContainer,
        },
      }),
      navigationOptions: {
        tabBarIcon: props =>
          <Ionicon name="ios-list-box-outline" size={24} color={props.tintColor} />,
      },
    },

    Li: {
      screen: StackNavigator({
        default: {
          screen: LiViewContainer,
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

const AppIntroNavigator = StackNavigator({
  Main: {
    screen: AppTabNavigator,
    // navigationOptions: {
    //   title: 'Settings',
    // },
  },
  IntroScreen: {
    screen: IntroViewContainer,
    mode: 'modal',
    headerMode: 'none',
    // navigationOptions: ({ navigation }) => ({ title: `${navigation.state.params.title}` }),
  },
});

export default AppIntroNavigator;
