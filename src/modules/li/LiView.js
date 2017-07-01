/**
  Name: LiView.js

  Description: Life's Intentions View

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
  ListView,
  //  Text,
  View,
  //  Switch,
  //  List,
  //  ListItem,
} from 'react-native';

import {
  Button,
  Container,
  Content,
  List,
  ListItem,
  Text,
  H2,
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
import material from '../../native-base-theme/variables/material';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class LiView extends Component {

  static navigationOptions = {
    title: "Life's Intentions",
  };

  // static propTypes = {
  //   navigate: PropTypes.func.isRequired,
  // };

  render() {
    const liListSafe = this.props.liList || "";

    const liRows = liListSafe.split("\n");
    const liComponents = liRows.map( (line, index) =>
      <Text key={`li${index}`} style={{ marginLeft: 15 }}>
        {`• ${line}`}
      </Text>
    );

    return (
      <StyleProvider style={getTheme()}>
        <Container style={styles.container}>
          <Content>
            <H2 style={styles.h2}>These Are My Life's Intentions</H2>
            <Text>I am willing to be...</Text>
            {liComponents}
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
    backgroundColor: 'white',
    padding: 25,
    paddingTop: 40,
  },
  h2: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  whiteBg: {
    backgroundColor: 'white',
  },
};

export default LiView;
