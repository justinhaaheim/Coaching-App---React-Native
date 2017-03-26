//   actionText: '#3FB4CF',
//   inactiveText: '#9B9B9B',
//   darkText: '#032250',
//   lightText: '#7F91A7',
//   cellBorder: '#EEEEEE',
//   darkBackground: '#183E63',

'use strict';

import React, { Component, } from 'react';
import { StyleSheet,
        Text,
        View,
        TouchableOpacity,
        Image,
      } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class QButton extends Component {
  props: {
    type: 'primary' | 'secondary' | 'bordered';
    icon?: number;
    caption: string;
    style?: any;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    onPress: () => mixed;
  };

//  static propTypes = {}

  static defaultProps = {
    type: 'primary',
    // backgroundColor: 'white',
    // borderColor: '#7F91A7',
    // color: '#7F91A7',
  };

//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

  render() {
    const caption = this.props.caption.toUpperCase();
    console.log("We've entered QButton render.");
    let icon;
    if (this.props.icon) {
      console.log("there's an icon!");
      icon = <Image source={this.props.icon} style={styles.icon} />;
    }
    let content;
    if (this.props.type === 'primary') {
      content = (
        <LinearGradient
          start={{x:0.5, y:1}} end={{x:1, y:1}}
          colors={['#6A6AD5', '#6F86D9']}
          style={[styles.button, styles.primaryButton]}>
          {icon}
          <Text style={[styles.caption, styles.primaryCaption]}>
            {caption}
          </Text>
        </LinearGradient>
      );
    } else {
      var border = this.props.type === 'bordered' && styles.border;
      content = (
        <View style={[styles.button, border]}>
          {icon}
          <Text style={[styles.caption, styles.secondaryCaption]}>
            {caption}
          </Text>
        </View>
      );
    }
    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[styles.container, this.props.style]}>
        {content}
      </TouchableOpacity>
    );
  }
}


const HEIGHT = 50;

var styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    // borderRadius: HEIGHT / 2,
    // borderWidth: 1 / PixelRatio.get(),
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  border: {
    borderWidth: 1,
    borderColor: '#7F91A7',
    borderRadius: HEIGHT / 4,
  },
  primaryButton: {
    borderRadius: HEIGHT / 4,
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 12,
  },
  caption: {
    letterSpacing: 1,
    fontSize: 12,
  },
  primaryCaption: {
    color: 'white',
  },
  secondaryCaption: {
    color: '#7F91A7',
},
});

export default QButton
