import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  LinearGradient,
  Button,
} from 'react-native'

import QButton from './QButton';

export default class App extends React.Component {

  _onPressButton() {
    console.log("You tapped the button!");
  }

  render() {

    let qualities = ['Alert', 'Attentive', 'Appreciative', 'Clear', 'Compassionate',
                     'Courageous', 'Creative', 'Empowering', 'Enthusiastic', 'Flexible',
                     'Focused', 'Generous', 'Gentle', 'Grateful', 'Joyous', 'Kind',
                     'Loving', 'Open', 'Present', 'Receptive', 'Supportive',
                     'Truthful', 'Vulnerable'];

    let questionsMLE = {
      1: "Who am I willing to be in order to produce an extraordinary result out of this interaction?",
      2: "Am I willing to systematically dismantel my structure of knowing?",
      3: "Am I willing to be a demand for coaching?",
      4: "Am I willing to guarantee that whoever coaches me will be successful?"
    };

    let buttons = qualities.map( (qname, index) =>
      (<Button key={index}
          title={qname}
          onPress={ () => console.log(`You tapped the ${qname} button!`) }
                />) );

    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          }}>
          <Text style={ styles.title }>The Coaching Arena</Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          }}>

          <QButton
            type='bordered'
            caption="AWESOME Button"
            onPress={ () => console.log("You tapped this awesome button!") }
            />


        {buttons}

          <TouchableHighlight
            onPress={this._onPressButton}
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}>
            <Text>Press</Text>
          </TouchableHighlight>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          }}>
          <Text style={styles.textQuestion}>1) { questionsMLE[1] }</Text>
          <Text style={styles.textQuestion}>2) { questionsMLE[2] }</Text>
          <Text style={styles.textQuestion}>3) { questionsMLE[3] }</Text>
          <Text style={styles.textQuestion}>4) { questionsMLE[4] }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize:32,
  },
  textQuestion: {
    marginBottom: 10,
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 25,
    paddingTop: 35,
    paddingBottom: 35,
  },
});
