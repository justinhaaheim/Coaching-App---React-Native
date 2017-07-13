import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';

import * as SettingsStateActions from '../settings/SettingsState';
import SettingsView from './SettingsView';

export default connect(
  state => ({
    arenaVersion: state.settings.arenaVersion,
    mleEnabled: state.settings.mleEnabled,
    notificationsEnabled: state.settings.notificationsEnabled,
  }),
  dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    settingsStateActions: bindActionCreators(SettingsStateActions, dispatch),
  }),
)(SettingsView);
