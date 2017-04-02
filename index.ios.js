/**
 * Name: index.ios.js
 *
 * Description: This is the root/entry point for the iOS build of our app, which
 * links directly to app/index.js . (index.android.js does this as well.)
 *
 * Exports:
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.txt', which is part of this source code package.
 */

"use strict";

import { AppRegistry } from 'react-native';
import App from './app/index.js';

AppRegistry.registerComponent('EmpowerApp', () => App);
