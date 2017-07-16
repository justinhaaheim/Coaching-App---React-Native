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
    arenaStateActions: PropTypes.shape({
      toggleButton: PropTypes.func.isRequired,
      resetArena: PropTypes.func.isRequired,
    }).isRequired,
    qualitiesList: PropTypes.array.isRequired,
    // TODO: specify exact shape of buttons array
    buttons: PropTypes.array.isRequired,
  };

  formatQualitiesList(list) {
    const listLower = list.map(s => s.toLowerCase());
    if (listLower.length === 0) {
      return '___';
    } else if (listLower.length === 1) {
      return listLower[0];
    }
    const last = listLower.pop();
    return `${listLower.join(', ')} and ${last}`;
  }

  render() {
    const questions = this.props.mleEnabled ? arena.questions.mle : arena.questions.client;
    const { toggleButton, resetArena } = this.props.arenaStateActions;
    const { buttons } = this.props;

    const buttonComponents = buttons.map((b, index) =>
      (<View style={styles.buttonWrapper} key={b.name}>
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
        <Content style={styles.contentContainer}>
          <H3 style={styles.h3}>Qualities of Being</H3>
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

          <H3 style={styles.h3}>Arena Questions</H3>
          <Text style={styles.bodyText}>
            1) {questions[1]}
          </Text>
          <Text style={styles.bodyTextItalic}>
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
  contentContainer: {
    padding: 20,
  },
  h3: {
    marginTop: 12,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 8,
  },
  bodyTextItalic: {
    fontSize: 16,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  copyright: {
    fontSize: 16,
    fontStyle: 'italic',
    marginVertical: 12,
  },
};

export default ArenaView;
