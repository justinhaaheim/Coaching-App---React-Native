/**
  Name: SettingsView

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Switch
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class SettingsView extends Component {
  // What does this do? Part of react-navigation ??
  static displayName = 'SettingsView';

  static navigationOptions = {
    title: 'Settings',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='settings' size={24} color={props.tintColor} />
      )
    })
  }

  static propTypes = {
    mleEnabled: PropTypes.bool.isRequired,
    settingsStateActions: PropTypes.shape({
      toggleArenaVersion: PropTypes.func.isRequired
    }).isRequired,
    navigate: PropTypes.func.isRequired
  };

  render() {
      const {toggleArenaVersion} = this.props.settingsStateActions;
      const {mleEnabled} = this.props;

    return (
      <View style={styles.container}>

        <Text>
            {`Arena Version: ${mleEnabled ? 'MLE' : 'Client'}`}
        </Text>
        <Switch
          onValueChange={() => toggleArenaVersion()}
          style={{marginBottom: 10}}
          value={mleEnabled} />
      </View>
    );
  }
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: '#349d4a',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});

export default SettingsView;
