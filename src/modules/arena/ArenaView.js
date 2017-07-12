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

import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import { Button, Container, Content, H3, Text } from 'native-base';

import { arena } from '../../config/data';

class ArenaView extends Component {
  static navigationOptions = {
    title: 'Coaching Arena',
  };

  static propTypes = {
    mleEnabled: PropTypes.bool.isRequired,
  };

  formatQualitiesList(list) {
    list = list.map(s => s.toLowerCase());
    if (list.length == 0) {
      return '___';
    } else if (list.length == 1) {
      return list[0];
    }
    const last = list.pop();
    return `${list.join(', ')} and ${last}`;
  }

  render() {
    const questions = this.props.mleEnabled ? arena.questions.mle : arena.questions.client;
    const { toggleButton, resetArena } = this.props.arenaStateActions;

    const { buttons } = this.props;

    const buttonComponents = buttons.map((b, index) =>
      (<View style={styles.buttonWrapper} key={index}>
        <Button
          key={index}
          light={!b.selected}
          dark={b.selected}
          small
          onPress={() => toggleButton(index)}
        >
          <Text>
            {b.name}
          </Text>
        </Button>
      </View>),
    );

    return (
      <Container style={styles.windowContainer}>
        <Content padder>
          <H3 style={styles.h3}>QUALITIES OF BEING</H3>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: 20,
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
                  <Text>Reset</Text>
                </Button>
              </View>
            </View>
          </View>

          <H3 style={styles.h3}>ARENA QUESTIONS</H3>
          <Text style={styles.bodyText}>
            1) {questions[1]}
          </Text>
          <Text style={styles.bodyTextItalic} >
            {`I am willing to be ${this.formatQualitiesList(this.props.qualitiesList)}.`}
          </Text>
          <Text style={styles.bodyText}>
            2) {questions[2]}
          </Text>
          <Text style={styles.bodyText}>
            3) {questions[3]}
          </Text>
          <Text style={styles.bodyText}>
            4) {questions[4]}
          </Text>
          <Text style={styles.copyright}>
            {`The Coaching Arena © 1997-${new Date().getFullYear()} The Academy for Coaching Excellence`}
          </Text>
        </Content>
      </Container>
    );
  }
}

// TODO: Use react stylesheet library
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
  h3: {
    marginTop: 18,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 15,
    marginBottom: 8,
  },
  bodyTextItalic: {
    fontSize: 15,
    marginBottom: 8,
    fontStyle: 'italic',
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
//   h3: {
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
