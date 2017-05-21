/**
 * Name:
 *
 * Description: This is the view (page/screen) that shows the Coaching Arena
 *
 * Exports:
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.txt', which is part of this source code package.
 */

'use strict';

import React, { Component, PropTypes } from 'react'; //Do I need to import Component?
import {
  StyleSheet,
  //  Text,
  View,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container, Content } from 'native-base/ui';
// import { Button, Icon, Text as NBText, Container, Content } from 'native-base';

// import QButton from '../../components/QButton';
import { arena } from '../../config/data';

import {
  Button,
  Container,
  Content,
  H2,
  List,
  ListItem,
  Text,
  Badge,
  Left,
  Body,
  Right,
  Separator,
  Switch,
} from 'native-base';


class ArenaView extends React.Component {
  // What does this do? Part of react-navigation ??
  static displayName = 'ArenaView';

  static navigationOptions = {
    title: 'Coaching Arena',
    tabBar: () => ({
      icon: props => <Icon name="speaker-notes" size={24} color={props.tintColor} />,
    }),
  };

  static propTypes = {
    navigate: PropTypes.func.isRequired,
    mleEnabled: PropTypes.bool.isRequired,
    //    buttons:
  };

  _onPressButton() {
    console.log('You tapped the button!');
  }

  // qualitiesList() {
  //   if (this.props.buttons.length > 0) {
  //     const buttons = this.props.buttons;
  //     console.log('buttons: ');
  //     console.log(buttons);
  //     const selectedNames = buttons.filter(b => b.selected).map(b => b.name);
  //     if (selectedNames.length == 0) {
  //       return '___';
  //     } else if (selectedNames.length == 1) {
  //       return selectedNames[0];
  //     } else {
  //       var last = selectedNames.pop();
  //       return selectedNames.join(', ') + ' and ' + last;
  //     }
  //   }
  // }

  formatQualitiesList(list) {
    list = list.map(s => s.toLowerCase())
    if (list.length == 0) {
      return '___';
    } else if (list.length == 1) {
      return list[0];
    }
    var last = list.pop();
    return list.join(', ') + ' and ' + last;
  }

  render() {
    // defaulting to Client questions. Todo: build a setting where the user can switch this.
    const questions = this.props.mleEnabled ? arena.questions.mle : arena.questions.client;
    const { toggleButton, resetArena } = this.props.arenaStateActions;

    const { buttons } = this.props;
    console.log('ArenaView Render, buttons = ', buttons);

    const buttonComponents = buttons.map((b, index) => (
      <View style={styles.buttonWrapper} key={index}>
        <Button
          key={index}
          light={!b.selected}
          dark={b.selected}
          small
          onPress={() => toggleButton(index)}
        >
          <Text>{b.name}</Text>
        </Button>
      </View>
    ));

    console.log(`buttons type = ${typeof buttons}`);

    return (
      <Container style={styles.windowContainer}>
        <Content padder>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              }}
          >
            <View
              style={{
                flexDirection: 'column',
              }}
            >
              {buttonComponents.slice(0, 12)}
            </View>
            <View
              style={{
                flexDirection: 'column',
              }}
            >
              {buttonComponents.slice(12)}
              <View style={styles.buttonWrapper}>
                <Button warning small onPress={() => resetArena()}>
                  <Text>
                    Reset
                  </Text>
                </Button>
              </View>
            </View>
          </View>

          <H2 style={styles.h2}>ARENA QUESTIONS</H2>
          <Text style={styles.bodyText}>1) {questions[1]}</Text>
          <Text style={styles.bodyText}>
            {`I am willing to be ${
              this.formatQualitiesList(this.props.qualitiesList)
            }.`}
          </Text>
          <Text style={styles.bodyText}>2) {questions[2]}</Text>
          <Text style={styles.bodyText}>3) {questions[3]}</Text>
          <Text style={styles.bodyText}>4) {questions[4]}</Text>
          <Text style={styles.copyright}>
            {`The Coaching Arena © 1997-${new Date().getFullYear()} The Academy for Coaching Excellence`}
          </Text>

        </Content>
      </Container>
    );
  }
}

// const BODY_TEXT_SIZE = 18;

const styles = {
  buttonWrapper: {
    margin: 3,
  },
  windowContent: {
    backgroundColor: 'white',
  },
  windowContainer: {
    backgroundColor: 'white',
  },
  h2: {
    marginTop: 12,
    marginBottom: 6,
  },
  bodyText: {
    fontSize: 15,
    marginBottom: 8,
  },
  copyright: {
    fontSize: 15,
    fontStyle: 'italic',
    marginVertical: 12,
  },
};

// const styles = StyleSheet.create({
//   title: {
//     //        fontSize: BODY_TEXT_SIZE*1.6,
//     color: "#555",
//     marginVertical: 10
//   },
//   h2: {
//     //        fontSize: BODY_TEXT_SIZE*1.3,
//     marginBottom: 10,
//     color: "#555"
//   },
//   textQuestion: {
//     marginBottom: 10,
//     // fontSize: BODY_TEXT_SIZE,
//     color: "#555"
//   },
//   qField: {
//     //        flex: 1,
//     //        minHeight: BODY_TEXT_SIZE*4,
//     paddingLeft: 18,
//     //height: BODY_TEXT_SIZE*3,
//     fontStyle: "italic",
//     color: "#555"
//   },
//   copyright: {
//     // fontSize: BODY_TEXT_SIZE*.8,
//     fontStyle: "italic",
//     marginTop: 30,
//     color: "#888"
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//     // alignItems: 'flex-start',
//     // justifyContent: 'center',
//   },
//   scrollContainer: {
//     padding: 25
//   }
// });

export default ArenaView;
