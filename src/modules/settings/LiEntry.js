import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import { Container, Content, H3, Item, Input } from "native-base";

import { updateLi } from './SettingsState';


class LiEntry extends Component {
  // static propTypes = {
  //   onUpdate: PropTypes.func.isRequired,
  //   content: PropTypes.string.isRequired
  // };

  render() {
    const { onUpdate, content } = this.props;

    return (
        <View style={{ backgroundColor: 'transparent', padding: 25 }}>
          <H3>Enter your Life's Intentions here, one per line:</H3>
          <TextInput
            style={{
              height: '90%',
              borderColor: '#777777',
              borderWidth: 1,
              padding: 5,
              fontSize: 16,
            }}
            multiline
            autoFocus
            onChangeText={text => onUpdate(text)}
            value={content}
          />
        </View>
    );
  }
}

export default connect(
  state => ({
    content: state.settings.liList,
  }),
  dispatch => ({
    onUpdate: bindActionCreators(updateLi, dispatch),
  })
)(LiEntry);
