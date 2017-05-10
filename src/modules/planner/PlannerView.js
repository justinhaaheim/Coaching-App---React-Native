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
  Switch,
//  List,
//  ListItem,
} from 'react-native';

import {
  Container,
  Content,
  H1,
  List,
  ListItem,
//  Text,
  Icon,
  Input,
  Item,
  Badge,
  Left,
  Body,
  Right,
  Separator,
//  Switch
} from 'native-base';

 import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class PlannerView extends Component {
  // What does this do? Part of react-navigation ??
  static displayName = 'PlannerView';

  static navigationOptions = {
    title: 'Planner',
    tabBar: () => ({
      icon: (props) => (
        <MaterialIcon name='settings' size={24} color={props.tintColor} />
      )
    })
  }

  static propTypes = {
    plannerStateActions: PropTypes.shape({
//      toggleArenaVersion: PropTypes.func.isRequired
    }).isRequired,
    navigate: PropTypes.func.isRequired
  };

  render() {

    return (
      <Container>
        <Content>
          <H1>
            Weekly Planner
          </H1>
          <Text>
            One of the most important things we can do is become clear about our vision -- the vision we have for a project, for a day, for a life. The prompts below will help you clarify your vision for your week, and you are encouraged to return to it multiple times a day.
          </Text>
          <Item underline>
            <Input placeholder='Underlined Textbox' />
          </Item>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
//    alignSelf: 'flex-start',
//    backgroundColor: 'white'
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

export default PlannerView;
