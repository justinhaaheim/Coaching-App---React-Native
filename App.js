import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    LinearGradient,
    Button,
    ScrollView,
} from 'react-native'

import QButton from './QButton';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeQualities: ''
        }
        this.selectedQualities = [];
        // this._onPressButtonLog = this._onPressButtonLog.bind(this)
    }

    _onPressButton() {
        console.log("You tapped the button!");
    }

    // _onPressButtonLog(e) {
    //     console.log(`You tapped the ${this.props[0]} button and produced ${e.target.toString()} event, and here's this title: ${this.props.title}`);
    // }

    _onPressQuality(qname) {
        // console.log(`_onPressQuality() with value of ${qname}`);
        // console.log(`selected Qualities: ${this.selectedQualities}`);
        // console.log(`Active Qualities Length: ${this.selectedQualities.length}`);

        var index = this.selectedQualities.indexOf(qname);
        if (index >= 0) {
            console.log(`FOUND at ${index}`);
            this.selectedQualities.splice(index, 1);
        } else {
            this.selectedQualities.push(qname);
        }
        // console.log(`selected Qualities: ${this.selectedQualities}`);
        this.setState({ activeQualities: this.qualitiesList()});
    }

    qualitiesList() {
        // console.log("qualitiesList() called!");
        // console.log(`Type of activeQualities: ${typeof(this.selectedQualities)}`);
        var aq = this.selectedQualities.slice();
//        console.log(`Type of aq: ${typeof(aq)}`);
        if (aq.length == 0) {
            return '';
        } else if (aq.length == 1) {
            return aq[0];
        } else {
            var last = aq.pop();
            return aq.join(", ") + " and " + last;
        }
    }



    render() {

        let qualities = [
            'Alert',
            'Attentive',
            'Appreciative',
            'Clear',
            'Compassionate',
            'Courageous',
            'Creative',
            'Empowering',
            'Enthusiastic',
            'Flexible',
            'Focused',
            'Generous',
            'Gentle',
            'Grateful',
            'Joyous',
            'Kind',
            'Loving',
            'Open',
            'Present',
            'Receptive',
            'Supportive',
            'Truthful',
            'Vulnerable'
        ];

        let questionsMLE = {
            1: "Who am I willing to be in order to produce an extraordinary result out of this interaction?",
            2: "Am I willing to systematically dismantle my structure of knowing?",
            3: "Am I willing to be a demand for coaching?",
            4: "Am I willing to guarantee that whoever coaches me will be successful?"
        };

        let buttons = qualities.map((qname, index) => (
        <View key={`button-view${index}`}
            style={{ margin: 5, }}
            >
            <QButton
                key={`button${index}`}
                title={qname}
                color='#373737'
                backgroundColor='white'
                borderWidth={1}
                borderColor='#e0e0e0'
                onPress={(() => this._onPressQuality(qname)).bind(this) }
                />
        </View>
        ));

        var _scrollView : ScrollView;

        return (
            <View style={styles.container}>

                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    onScroll={() => { console.log('onScroll!'); }} scrollEventThrottle={200}
                    >


                    <View style={{
                      flex: 1,
                      flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                    }}>


                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignSelf: 'flex-start',
                        backgroundColor: 'pink',
                        borderWidth: 1,
                        borderColor: '#373737',
                        borderRadius: 10,
                    }}>
                        <Text style={styles.title}>The Coaching Arena</Text>
                    </View>


                    <View style={{
                        flex: 3,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        backgroundColor: '#eeeeee'
                    }}>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}>

                            {buttons.slice(0, 12)}

                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}>

                            {buttons.slice(12)}

                        </View>
                    </View>


                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <Text style={styles.textQuestion}>1) {questionsMLE[1]}</Text>
                        <Text style={styles.textQuestion}>{`I am willing to be ${this.qualitiesList()}.`}</Text>
                        <Text style={styles.textQuestion}>2) {questionsMLE[2]}</Text>
                        <Text style={styles.textQuestion}>3) {questionsMLE[3]}</Text>
                        <Text style={styles.textQuestion}>4) {questionsMLE[4]}</Text>
                    </View>

                </View>
                </ScrollView>
                <TouchableOpacity style={styles.button} onPress={() => {
                    _scrollView.scrollTo({y: 0});
                }}>
                    <Text>Scroll to top</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    _scrollView.scrollToEnd({animated: true});
                }}>
                    <Text>Scroll to bottom</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32
    },
    textQuestion: {
        marginBottom: 10,
        fontSize: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 25,
        paddingTop: 35,
        paddingBottom: 35
    }
});
