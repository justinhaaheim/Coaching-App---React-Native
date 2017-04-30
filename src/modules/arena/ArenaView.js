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

"use strict";

import React, { Component } from 'react'; //Do I need to import Component?
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

// import { Container, Content } from 'native-base/ui';
// import { Button, Icon, Text as NBText, Container, Content } from 'native-base';

import QButton from '../../components/QButton';
import { arena } from '../../config/data';

export default class ArenaView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          arenaVersion: 'client',
          activeQualities: '',
        };
        this.selectedQualities = [];
    }

    _onPressButton() {
        console.log("You tapped the button!");
    }

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

        // defaulting to Client questions. Todo: build a setting where the user can switch this.
        const questions = (this.state.arenaVersion == 'mle') ? arena.questions.mle : arena.questions.client;

        let buttons = arena.qualities.map((qname, index) => (
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
                    automaticallyAdjustContentInsets={true}
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
                        <Text style={styles.textQuestion}>1) {questions[1]}</Text>
                        <Text style={[styles.qField, styles.textQuestion]}>{`I am willing to be ${this.qualitiesList()}.`}</Text>
                        <Text style={styles.textQuestion}>2) {questions[2]}</Text>
                        <Text style={styles.textQuestion}>3) {questions[3]}</Text>
                        <Text style={styles.textQuestion}>4) {questions[4]}</Text>
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
//        flex: 1,
//        minHeight: BODY_TEXT_SIZE*4,
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
