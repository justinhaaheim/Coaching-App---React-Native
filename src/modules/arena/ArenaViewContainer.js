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
import ArenaView from './ArenaView';
import {NavigationActions} from 'react-navigation';
// import * as SettingsStateActions from '../settings/SettingsState';

export default connect(
  state => ({
    arenaVersion: state.getIn(['settings', 'arenaVersion']),
    mleEnabled: state.getIn(['settings', 'mleEnabled']),
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
      // settingsStateActions: bindActionCreators(SettingsStateActions, dispatch)
    };
  }
)(ArenaView);
