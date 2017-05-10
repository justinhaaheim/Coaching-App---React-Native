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
//  Text,
  View,
//  Switch,
//  List,
//  ListItem,
} from 'react-native';

import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Badge,
  Left,
  Body,
  Right,
  Separator,
  Switch
} from 'native-base';

 import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class SettingsView extends Component {
  // What does this do? Part of react-navigation ??
  static displayName = 'SettingsView';

  static navigationOptions = {
    title: 'Settings',
    tabBar: () => ({
      icon: (props) => (
        <MaterialIcon name='settings' size={24} color={props.tintColor} />
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
      <Container style={styles.container}>
        <Content>
        <List style={styles.whiteBg}>
          <ListItem itemDivider>
            <Text>
              Coaching Arena
            </Text>
          </ListItem>
              <ListItem icon>
                  <Left>
                      <Icon name="wifi" />
                  </Left>
                  <Body>
                    <Text>MLE/TCI Version</Text>
                  </Body>
                  <Right>
                    <Switch
                      onValueChange={() => toggleArenaVersion()}
                      value={mleEnabled} />
                  </Right>
              </ListItem>
          </List>
        </Content>
        </Container>
    );
  }
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = {
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    // alignSelf: 'flex-start',
    // backgroundColor: 'white'
  },
  whiteBg: {
    backgroundColor: 'white',
  },
};

export default SettingsView;
