/**
  Name: IntroView

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React, { PropTypes, Component } from 'react';

import {
  Container,
  Content,
  H2,
  StyleProvider,
} from 'native-base';

import getTheme from '../../native-base-theme/components';

class IntroView extends Component {
  static displayName = 'IntroView';

  static navigationOptions = {
    title: 'Intro',
  };

  static propTypes = {
    introComplete: PropTypes.bool.isRequired,
    settingsStateActions: PropTypes.shape({
      setIntroStatus: PropTypes.func.isRequired,
    }).isRequired,
    navigate: PropTypes.func.isRequired,
  };

  render() {
    const { setIntroStatus } = this.props.settingsStateActions;
    const { introComplete } = this.props;

    return (
      <StyleProvider style={getTheme()}>
        <Container style={styles.container}>
          <Content>
            <H2>Welcome to Empower</H2>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}


const styles = {
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    // alignSelf: 'flex-start',
    backgroundColor: '#F0EFF5',
  },
  whiteBg: {
    backgroundColor: 'white',
  },
};

export default IntroView;
