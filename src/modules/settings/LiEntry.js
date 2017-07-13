import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInput } from 'react-native';

import { Container, Content, H3 } from 'native-base';

import { updateLi } from './SettingsState';

class LiEntry extends Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
  };

  render() {
    const { onUpdate, content } = this.props;

    return (
      <Container>
        <Content style={{ backgroundColor: 'white', padding: 25 }}>
          <H3>Enter your Life's Intentions here, one per line:</H3>
          <TextInput
            style={{
              height: 400, // TODO: make this relative to screen size
              borderColor: '#777777',
              borderWidth: 1.5,
              padding: 5,
              fontSize: 16,
            }}
            multiline
            autoFocus
            onChangeText={text => onUpdate(text)}
            value={content}
          />
        </Content>
      </Container>
    );
  }
}

export default connect(
  state => ({
    content: state.settings.liList,
  }),
  dispatch => ({
    onUpdate: bindActionCreators(updateLi, dispatch),
  }),
)(LiEntry);
