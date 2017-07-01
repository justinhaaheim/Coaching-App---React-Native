/**
  Name: Credits

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

const Credits = () => (
  <Container style={styles.container}>
    <Content>
      <Text style={styles.textBlock}>
        The Coaching Arena and Life's Intentions © 2017 The Academy for Coaching Excellence
      </Text>
      <Text style={styles.textBlock}>
        Monkey app icon made by Freepik from www.flaticon.com
      </Text>
    </Content>
  </Container>
);

Credits.navigationOptions = {
  title: "Acknowledgements",
};

const styles = {
  container: {
    padding: 15
  },
  textBlock: {
    marginBottom: 15,
    fontStyle: 'italic'
  },
};

export default Credits;
