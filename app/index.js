/**
 * Name: app/index.js
 *
 * Description: This is the root of our app.
 *
 * Exports:
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.txt', which is part of this source code package.
 */

"use strict";

import NavigationBar from 'react-native-navbar'
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
import { Button, Icon, Text as NBText, Container, Content } from 'native-base';

import QButton from './components/QButton';
import { arena } from './config/data';
import ArenaScene from './scenes/ArenaScene';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        // };
    }

    render() {
        return (
            <Container>
              <ArenaScene />
            </Container>
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
