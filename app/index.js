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



import React, { Component } from 'react';  //Do I need to import Component?

// import ArenaScene from './scenes/ArenaScene';
// import Settings from './scenes/Settings';
import { Tabs } from './config/router';

export default class App extends Component {
    render() {
        return (
          <Tabs />
        );
    }
};
