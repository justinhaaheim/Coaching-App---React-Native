import React from 'react';
import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import SettingsViewContainer from '../settings/SettingsViewContainer';
import ArenaViewContainer from '../arena/ArenaViewContainer';
import PlannerViewContainer from '../planner/PlannerViewContainer';
import LiViewContainer from '../li/LiViewContainer';
import TextEntry from '../../components/TextEntry';
import Credits from '../settings/Credits';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const headerColor = '#39babd';
const activeColor = 'white';

const SettingsNavigator = StackNavigator({

  Main: {
    screen: SettingsViewContainer,
    navigationOptions: {
      title: 'Settings',
    }
  },

  LiEntry: {
    screen: TextEntry,
    navigationOptions: ({navigation}) => ({title: `${navigation.state.params.title}`})
  },

  Credits: {
    screen: Credits,
  }

});

// SettingsNavigator.navigationOptions = {
//   tabBarIcon: ({ tintColor }) =>
//     (<MaterialIcon name="settings" size={24} color={tintColor} />)
// }

const AppNavigator = TabNavigator({

  Arena: {
    screen: StackNavigator({
      default: {
        screen: ArenaViewContainer
      }
    }),
    navigationOptions: {
      tabBarIcon: props =>
        <Ionicon
          name="ios-list-box-outline"
          size={24}
          color={props.tintColor}
        />,
    }
  },

  Li: {
    screen: StackNavigator({
      default: {
        screen: LiViewContainer
      }
    }),
    navigationOptions: {
      tabBarIcon: ({tintColor, focused}) =>
        <Ionicon
          name={focused ? 'ios-body' : 'ios-body'}
          size={24}
          color={tintColor}
        />,
    }
  },

  Settings: {
    screen: SettingsNavigator,
    navigationOptions: {
      title: 'Settings',
      tabBarIcon: ({tintColor, focused}) =>
        <MaterialIcon
          name={focused ? 'settings' : 'settings'}
          size={24}
          color={tintColor}
        />,
    }
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {
          backgroundColor: activeColor
        },
        style: {
          backgroundColor: headerColor
        }
      }
    })
  }
});

// AppNavigator.navigationOptions = {
//   title: 'EmpowerApp',
//   header: {
//     titleStyle: {color: 'white'},
//     style: {
//       backgroundColor: headerColor,
//       // elevation: 1 // disable header elevation when TabNavigator visible
//     }
//   }
// };

// This is a hack to get all of the screens to have headers.
// See: https://github.com/react-community/react-navigation/issues/741#issuecomment-296671052
// const AppNavigatorWrapper = StackNavigator({
//   OnlyScreen: { screen: AppNavigator }
// })

export default AppNavigator;
