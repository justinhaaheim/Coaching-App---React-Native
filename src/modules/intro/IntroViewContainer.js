/**
  Name:

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import * as SettingsStateActions from '../settings/SettingsState';
import IntroView from './IntroView';

export default connect(
  state => ({
    introComplete: state.settings.introComplete,
  }),
  dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    settingsStateActions: bindActionCreators(SettingsStateActions, dispatch),
  }),
)(IntroView);
