/**
  Name: SettingsView

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React, { PropTypes, Component } from 'react';
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

import NotificationsIOS from 'react-native-notifications';

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
  StyleProvider,
  Switch,
} from 'native-base';

import getTheme from '../../native-base-theme/components';
// import material from '../../native-base-theme/variables/material';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


class SettingsView extends Component {
  // What does this do? Part of react-navigation ??
  static displayName = 'SettingsView';

  static navigationOptions = {
    title: 'Settings',
  };

  static propTypes = {
    mleEnabled: PropTypes.bool.isRequired,
    // liList: PropTypes.string.isRequired,
    settingsStateActions: PropTypes.shape({
      toggleArenaVersion: PropTypes.func.isRequired,
    }).isRequired,
    navigate: PropTypes.func.isRequired,
  };

  fireLocalNotification() {
    let localNotification = NotificationsIOS.localNotification({
      fireDate: new Date(Date.now() + (2 * 1000)).toISOString(),
        alertBody: "Local notificiation!",
        alertTitle: "Local Notification Title",
        alertAction: "Click here to open",
        soundName: "chime.aiff",
        foreground: true,
        category: "SOME_CATEGORY",
        userInfo: { }
      });
  }


  render() {
    const { toggleArenaVersion, toggleNotifications, updateLi } = this.props.settingsStateActions;
    const { mleEnabled, notificationsEnabled } = this.props;

    return (
      <StyleProvider style={getTheme()}>
        <Container style={styles.container}>
          <Content>
            <List style={styles.whiteBg}>

              <Separator bordered>
                <Text>
                  COACHING ARENA
                </Text>
              </Separator>

              <ListItem icon>
                <Left>
                  <Icon name="ios-list-box-outline" />
                </Left>
                <Body>
                  <Text>MLE/TCI Version</Text>
                </Body>
                <Right>
                  <Switch
                    onValueChange={ () =>
                      toggleArenaVersion()
                    }
                    value={mleEnabled} />
                </Right>
              </ListItem>

              <ListItem icon>
                <Left>
                  <Icon name="ios-notifications" />
                </Left>
                <Body>
                  <Text>Remind me to set the arena</Text>
                </Body>
                <Right>
                  <Switch
                    onValueChange={ () =>
                      toggleNotifications()
                    }
                    value={notificationsEnabled} />
                </Right>
              </ListItem>

              <Separator bordered />

              <ListItem
                icon
                onPress={ () => {
                  this.props.navigation.navigate('LiEntry', {
                    title: "Life's Intentions",
                    // content: () => liList, // Buggy - doesn't update after navigation?
                    onUpdate: updateLi,  // already bound to dispatch
                  });
                }}
                >
                <Left>
                  <Icon name="ios-body" />
                </Left>
                <Body>
                  <Text>Edit Life's Intentions</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <Separator bordered />

              <ListItem
                icon
                onPress={ this.fireLocalNotification.bind(this) }
                >
                <Left>
                  <Icon name="ios-body" />
                </Left>
                <Body>
                  <Text>Test Notification</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <Separator bordered />

              <ListItem
                icon
                onPress={ this.fireLocalNotification.bind(this) }
                >
                <Left>
                  <Icon name="ios-ribbon" />
                </Left>
                <Body>
                  <Text>Credits & Acknowledgements</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
    </StyleProvider>
    );
  }
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80,
};

const styles = {
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    // alignSelf: 'flex-start',
    backgroundColor: '#F0EFF5'
  },
  whiteBg: {
    backgroundColor: 'white',
  },
};

export default SettingsView;
