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
// import * as NotifierStateActions from '../Notifier/NotifierState';
import NotifierView from './NotifierView';

export default connect(
  state => ({
    notificationsEnabled: state.settings.notificationsEnabled,
    // arenaVersion: state.settings.arenaVersion,
  }),
  dispatch => {
    return {
      // navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      // settingsStateActions: bindActionCreators(NotifierStateActions, dispatch)
//      onUpdate: bindActionCreators(updateLi, dispatch)
    };
  }
)(NotifierView);
