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

// import LinearGradient from 'react-native-linear-gradient';

class QButton extends Component {
    constructor(props) {
        super(props)
        this.state = { selected: false }
    }

  //   props: {
  //   type: 'primary' | 'secondary' | 'bordered';
  //   icon?: number;
  //   title: string;
  //   style?: any;
  //   backgroundColor?: string;
  //   borderColor?: string;
  //   borderWidth?: number;
  //   borderRadius?: number;
  //   color?: string;
  //   handleSelect?: () =>
  //   //onPress: () => mixed;
  // };

    handlePress(e) {
        const title = this.props.title;
      if (this.state.selected) {
        this.props.handleUnselect(title);
        this.setState({selected: false});
      } else {
        const succeeded = this.props.handleSelect(title);
        // The app has certain situations under which selecting further buttons should be disabled. Hence the check for success.
        if (succeeded) {
            this.setState({selected: true});
        } else {
            console.log(`Tried to select ${title} but it failed.`);
        }
      }
    }

//  static propTypes = {}

  static defaultProps = {
    type: 'primary',
    // backgroundColor: 'white',
    // borderColor: '#7F91A7',
    // borderWidth: 0,
    // color: '#7F91A7',
  };

//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

  render() {
    const title = this.props.title.toUpperCase();
    var {backgroundColor, borderWidth, borderColor, color} = this.props;

    if (this.state.selected) {
        [ backgroundColor, color ] = [color, backgroundColor];
    }

    let icon;

    if (this.props.icon) {
      console.log("there's an icon!");
      icon = <Image source={this.props.icon} style={styles.icon} />;
    }

    let content;

    if (this.props.type === 'primary') {
      content = (
        <View
          style={[styles.button, styles.primaryButton, {borderWidth, borderColor, backgroundColor}]}>
          {icon}
          <Text style={[styles.title, styles.primaryTitle, {color}]}>
            {title}
          </Text>
      </View>
      );

    } else {
      var border = this.props.type === 'bordered' && styles.border;
      content = (
        <View style={[styles.button, border]}>
          {icon}
          <Text style={[styles.title, styles.secondaryTitle]}>
            {title}
          </Text>
        </View>
      );
    }
    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.handlePress.bind(this)}
        activeOpacity={0.8}
        style={[styles.container, this.props.style]}>
        {content}
      </TouchableOpacity>
    );
  }
}

const BUTTON_FONT_SIZE = 11;
const HEIGHT = BUTTON_FONT_SIZE*2.4;

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
    paddingHorizontal: 12,
  },
  border: {
    borderWidth: 1,
    borderColor: '#7F91A7',
//    borderRadiu.zs: HEIGHT / 2,
  },
  primaryButton: {
//    borderRadius: HEIGHT / 2,
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 12,
  },
  title: {
    letterSpacing: 1,
    fontSize: BUTTON_FONT_SIZE,
  },
  primaryTitle: {
    color: 'white',
  },
  secondaryTitle: {
    color: '#7F91A7',
},
});

export default QButton
