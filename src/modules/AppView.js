import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import NotificationsIOS from 'react-native-notifications';

// import NavigatorViewContainer from './navigator/NavigatorViewContainer';
import AppNavigator from './navigator/Navigator';
import NotifierViewContainer from './notifier/NotifierViewContainer';
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

      const saveSnapshotThrottled = throttle(snapshotUtil.saveSnapshot, 5000);

      store.subscribe(() => {
        saveSnapshotThrottled(store.getState());
        // snapshotUtil.saveSnapshot(store.getState());
      });
    });
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
        <NotifierViewContainer/>
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
