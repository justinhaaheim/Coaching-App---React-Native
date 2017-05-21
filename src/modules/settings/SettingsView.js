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
    tabBar: () => ({
      icon: props => <MaterialIcon name="settings" size={24} color={props.tintColor} />,
    }),
  };

  static propTypes = {
    mleEnabled: PropTypes.bool.isRequired,
    liList: PropTypes.string.isRequired,
    settingsStateActions: PropTypes.shape({
      toggleArenaVersion: PropTypes.func.isRequired,
    }).isRequired,
    navigate: PropTypes.func.isRequired,
  };

  render() {
    const { toggleArenaVersion, updateLi } = this.props.settingsStateActions;
    const { mleEnabled, liList } = this.props;

    return (
      <StyleProvider style={getTheme()}>
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
                    onValueChange={ () =>
                      toggleArenaVersion()
                    }
                    value={mleEnabled} />
                </Right>
              </ListItem>

              <ListItem
                icon
                onPress={ () => {
                  console.log("LI item pressed");
                  console.log(this.props.navigation);
                  this.props.navigation.navigate('LiEntry', {
                    title: "Life's Intentions",
                    content: () => liList, // Buggy - doesn't update after navigation?
                    onUpdate: updateLi,  // already bound to dispatch
                  });
                }}
                >
                <Left>
                  <Icon name="wifi" />
                </Left>
                <Body>
                  <Text>Life's Intentions</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <Separator bordered></Separator>

              <ListItem icon>
                <Left>
                  <Icon name="wifi" />
                </Left>
                <Body>
                  <Text>Placeholder</Text>
                </Body>
                <Right>
                  <Switch />
                </Right>
              </ListItem>

              <ListItem itemDivider>
                <Text>
                  Acknowledgements
                </Text>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>(Icon acknowledgement)</Text>
                </Body>
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
    // backgroundColor: 'white'
  },
  whiteBg: {
    backgroundColor: 'white',
  },
};

export default SettingsView;
