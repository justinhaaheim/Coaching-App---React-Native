import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import NotificationsIOS from 'react-native-notifications';

// import NavigatorViewContainer from './navigator/NavigatorViewContainer';
import AppNavigator from './navigator/Navigator';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';

import throttle from 'lodash.throttle';

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  onPushRegistered(deviceToken) {
    console.log("Push Notifications - Device Token Received", deviceToken);
  }

  onPushRegistrationFailed(error) {
    // For example:
    //
    // error={
    //   domain: 'NSCocoaErrorDomain',
    //   code: 3010,
    //   localizedDescription: 'remote notifications are not supported in the simulator'
    // }
    console.log(error);
  }

  componentWillUnmount() {
    // prevent memory leaks!
    NotificationsIOS.removeEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.removeEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
  }

  componentDidMount() {
    snapshotUtil.resetSnapshot().then(snapshot => {
      const {dispatch} = this.props;

      console.log("Snapshot:", snapshot);

      // There's a problem here. If the snapshot is a different shape than
      // the currently defined initial state, we end up getting the older
      // version

      if (snapshot) {
        // if (false) { // for debugging
        console.log("Resetting session state from snapshot.");
        dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));

      } else {
        console.log("Initializing State.");
        dispatch(SessionStateActions.initializeSessionState());

      }

      const throttledTest = throttle(() => console.log("This should be throttled."), 5000);
      const saveSnapshotThrottled = throttle(snapshotUtil.saveSnapshot, 5000);

      store.subscribe(() => {
        saveSnapshotThrottled(store.getState());
        throttledTest();
        // snapshotUtil.saveSnapshot(store.getState());
      });
    });
  }

  constructor() {
    super();
    NotificationsIOS.addEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.addEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
    NotificationsIOS.requestPermissions();
    NotificationsIOS.consumeBackgroundQueue(); // Process all notifications that happened before javascript engine went online
  }

  render() {
    if (!this.props.isReady) {
      return (
        <View style={{
          flex: 1
        }}>
          <ActivityIndicator style={styles.centered}/>
        </View>
      );
    }

    return (
      <View style={{
        flex: 1
      }}>
        <AppNavigator/>
        <DeveloperMenu/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
