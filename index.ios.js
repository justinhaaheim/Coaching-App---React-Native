/**
  Name: /index.ios.js

  Description: This is the root/entry point for the iOS build of our app.

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */
// @flow

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import codePush from 'react-native-code-push';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/modules/AppViewContainer';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

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
