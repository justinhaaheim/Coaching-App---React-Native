import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
// import NavigatorViewContainer from './navigator/NavigatorViewContainer';
import AppNavigator from './navigator/Navigator';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
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

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  render() {
    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <AppNavigator />
        <DeveloperMenu />
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
