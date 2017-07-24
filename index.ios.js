import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import codePush from 'react-native-code-push';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import AppViewContainer from './src/modules/AppViewContainer';

const codePushOptions = {
  updateDialog: true,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

class EmpowerApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

EmpowerApp = codePush(codePushOptions)(EmpowerApp);

AppRegistry.registerComponent('EmpowerApp', () => EmpowerApp);
