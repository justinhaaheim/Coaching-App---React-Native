import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import SettingsViewContainer from '../settings/SettingsViewContainer';
import ArenaViewContainer from '../arena/ArenaViewContainer';
import PlannerViewContainer from '../planner/PlannerViewContainer';
import LiViewContainer from '../li/LiViewContainer';
import TextEntry from '../../components/TextEntry';

const headerColor = '#39babd';
const activeColor = 'white';


// Root navigator is a StackNavigator
const SettingsNavigator = StackNavigator({
  Main: { screen: SettingsViewContainer },
  LiEntry: {
    screen: TextEntry,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  }
});

// TabNavigator is nested inside StackNavigator
export const AppNavigator = TabNavigator({
  Arena: {screen: ArenaViewContainer},
  Li: {screen: LiViewContainer},
//  Planner: {screen: PlannerViewContainer},
  Settings: { screen: SettingsNavigator },
}, {
  animationEnabled: true,
  tabBarOptions: {

    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

AppNavigator.navigationOptions = {
//  title: 'EmpowerApp',
  header: {
//    titleStyle: {color: 'white'},
    style: {
//      backgroundColor: headerColor,
      elevation: 0 // disable header elevation when TabNavigator visible
    }
  }
};

export default AppNavigator;
