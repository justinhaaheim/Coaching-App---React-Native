import React, { PropTypes, Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import throttle from 'lodash.throttle';

import store from '../redux/store';
import NavigatorViewContainer from './navigator/NavigatorViewContainer';
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
    const { appVersion } = this.props;

    snapshotUtil.resetSnapshot().then((snapshot) => {
      const { dispatch } = this.props;

      // TODO: Address issue here where snapshot is a different shapen than the
      // currently defined initial state.
      if (snapshot) {
        if (appVersion === snapshot.settings.appVersion) {
          console.log('Resetting session state from snapshot.');
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          console.log('Snapshot does not match current app version. Discarding');
          dispatch(SessionStateActions.initializeSessionState());
        }
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
        <View style={{ flex: 1 }}>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <NavigatorViewContainer />
        <NotifierViewContainer />
        {__DEV__ && <DeveloperMenu />}
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
