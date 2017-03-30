import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
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

    onSelectQuality(title) {
        if (this.selectedQualities.length >= 5) {
            return false;
        }
        const lowerTitle = title.toLowerCase();
        this.selectedQualities.push(lowerTitle);
        this.setState({
            activeQualities: this.qualitiesList()
        });
        return true;
    }

    onUnselectQuality(title) {
        const lowerTitle = title.toLowerCase();
        var index = this.selectedQualities.indexOf(lowerTitle);
        if (index < 0) {
            console.warn(`Trying to unselect quality ${lowerTitle} but it is not present in the array.`);
        }
        console.log(`Quality ${lowerTitle} FOUND at ${index}`);
        this.selectedQualities.splice(index, 1);
        this.setState({
            activeQualities: this.qualitiesList()
        });
    }

    // _onPressQuality(qname) {
    //     var index = this.selectedQualities.indexOf(qname);
    //     if (index >= 0) {
    //         console.log(`FOUND at ${index}`);
    //         this.selectedQualities.splice(index, 1);
    //     } else {
    //         this.selectedQualities.push(qname);
    //     }
    //     // console.log(`selected Qualities: ${this.selectedQualities}`);
    //     this.setState({ activeQualities: this.qualitiesList()});
    // }

    qualitiesList() {
        // console.log("qualitiesList() called!");
        // console.log(`Type of activeQualities: ${typeof(this.selectedQualities)}`);
        var aq = this.selectedQualities.slice();
//        console.log(`Type of aq: ${typeof(aq)}`);
        if (aq.length == 0) {
            return '___';
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
            style={{ margin: 3, }}
            >
            <QButton
                key={`button${index}`}
                title={qname}
                color='#373737'
                backgroundColor='white'
                borderWidth={1}
                borderColor='#e0e0e0'
                handleSelect={this.onSelectQuality.bind(this)}
                handleUnselect={this.onUnselectQuality.bind(this)}
                />
        </View>
        ));

        var _scrollView : ScrollView;

        return (
            <View style={styles.container}>

                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    onScroll={() => { console.log('onScroll!'); }} scrollEventThrottle={800}
                    style={styles.scrollContainer}
                    >


                    <View style={{
                      flex: 1,
                      flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                    }}>


                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignSelf: 'flex-start',
                        backgroundColor: 'transparent',
                        borderWidth: 0,
                        borderColor: '#373737',
                        borderRadius: 0,
                        marginVertical: 5,
                    }}>
                        <Text style={styles.title}>THE COACHING ARENA</Text>
                    </View>


                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        alignSelf: 'flex-start',
                        marginVertical: 10,
                        backgroundColor: 'transparent',
                    }}>
                    <View style={{

                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            borderWidth: 0,
                            borderColor: 'black',

                        }}>

                            {buttons.slice(0,12)}

                        </View>
                        <View style={{

                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}>

                            {buttons.slice(12)}

                        </View>
                    </View>


                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginVertical: 10,
                    }}>
                        <Text style={styles.h2}>ARENA QUESTIONS</Text>
                        <Text style={styles.textQuestion}>1) {questionsMLE[1]}</Text>
                        <Text style={[styles.qField, styles.textQuestion]}>{`I am willing to be ${this.qualitiesList()}.`}</Text>
                        <Text style={styles.textQuestion}>2) {questionsMLE[2]}</Text>
                        <Text style={styles.textQuestion}>3) {questionsMLE[3]}</Text>
                        <Text style={styles.textQuestion}>4) {questionsMLE[4]}</Text>
                        <Text style={styles.copyright}>{`The Coaching Arena © 1997-${(new Date()).getFullYear()} The Academy for Coaching Excellence`}</Text>
                    </View>

                </View>
                </ScrollView>
            </View>
        );
    }
}

const BODY_TEXT_SIZE = 18;

const styles = StyleSheet.create({
    title: {
        fontSize: BODY_TEXT_SIZE*1.6,
        color: '#555',
        marginVertical: 10,
    },
    h2: {
        fontSize: BODY_TEXT_SIZE*1.3,
        marginBottom: 10,
        color: '#555',
    },
    textQuestion: {
        marginBottom: 10,
        fontSize: BODY_TEXT_SIZE,
        color: '#555',
    },
    qField: {
        flex: 1,
        minHeight: BODY_TEXT_SIZE*4,
        paddingLeft: 18,
        //height: BODY_TEXT_SIZE*3,
        fontStyle: 'italic',
        color: '#555',
    },
    copyright: {
        fontSize: BODY_TEXT_SIZE*.8,
        fontStyle: 'italic',
        marginTop: 30,
        color: '#888',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },
    scrollContainer: {
        padding: 25,

    }
});

// <TouchableOpacity style={styles.button} onPress={() => {
//     _scrollView.scrollTo({y: 0});
// }}>
//     <Text>Scroll to top</Text>
// </TouchableOpacity>
// <TouchableOpacity style={styles.button} onPress={() => {
//     _scrollView.scrollToEnd({animated: true});
// }}>
//     <Text>Scroll to bottom</Text>
// </TouchableOpacity>
