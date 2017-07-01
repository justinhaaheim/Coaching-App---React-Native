/**
  Name:

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import * as SettingsStateActions from '../settings/SettingsState';
import SettingsView from './SettingsView';

export default connect(
  state => ({
    arenaVersion: state.settings.arenaVersion,
    mleEnabled: state.settings.mleEnabled,
    // liList: state.settings.liList
    notificationsEnabled: state.settings.notificationsEnabled,
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      settingsStateActions: bindActionCreators(SettingsStateActions, dispatch)
//      onUpdate: bindActionCreators(updateLi, dispatch)
    };
  }
)(SettingsView);
