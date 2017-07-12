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
      <Text key={`li${index}`} style={styles.bodyText}>
        {`${line}`}
      </Text>
    );

    return (
      <StyleProvider style={getTheme()}>
        <Container style={styles.container}>

            <H2 style={styles.h2}>These Are My Life's Intentions</H2>
            <Text style={styles.bodyText}>{"I am willing to be...\n"}</Text>
            {liComponents}

        </Container>
      </StyleProvider>
    );
  }
}


const styles = {
  container: {
    backgroundColor: 'white',
    padding: 25,
    paddingTop: 40,
    alignItems: 'center',
  },
  h2: {
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: 55,
    fontWeight: 'bold'
  },
  bodyText: {
    fontSize: 18,
  },
  whiteBg: {
    backgroundColor: 'white',
  },
};

export default LiView;
