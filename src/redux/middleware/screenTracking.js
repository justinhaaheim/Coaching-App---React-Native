import { NavigationActions } from 'react-navigation';
import Analytics from 'mobile-center-analytics';

// gets the current screen from navigation state
function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

const screenTracking = ({ getState }) => next => (action) => {
  if (action.type !== NavigationActions.NAVIGATE && action.type !== NavigationActions.BACK) {
    return next(action);
  }
  const currentScreen = getCurrentRouteName(getState().navigatorState);
  const result = next(action);
  const nextScreen = getCurrentRouteName(getState().navigatorState);
  if (nextScreen !== currentScreen) {
    Analytics.trackEvent('ScreenView', { screen: nextScreen });
  }
  return result;
};

export default screenTracking;
