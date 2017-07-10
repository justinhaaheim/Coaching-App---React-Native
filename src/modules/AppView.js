import React, { PropTypes, Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import throttle from 'lodash.throttle';

import store from '../redux/store';
import AppNavigator from './navigator/Navigator';
import NotifierViewContainer from './notifier/NotifierViewContainer';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import DeveloperMenu from '../components/DeveloperMenu';


class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    snapshotUtil.resetSnapshot().then((snapshot) => {
      const { dispatch } = this.props;

      console.log('Snapshot:', snapshot);

      // TODO: Address issue here where snapshot is a different shapen than the
      // currently defined initial state.

      if (snapshot) {
        console.log('Resetting session state from snapshot.');
        dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
      } else {
        console.log('No snapshot available. Initializing state normally.');
        dispatch(SessionStateActions.initializeSessionState());
      }

      // Throttle the async snapshot saving to every 5s
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
          flex: 1,
        }}
        >
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <View style={{
        flex: 1,
      }}
      >
        <AppNavigator />
        <DeveloperMenu />
        <NotifierViewContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default AppView;
