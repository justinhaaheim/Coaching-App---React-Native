import Analytics from 'mobile-center-analytics';

import { UPDATE_LI } from '../../modules/settings/SettingsState';

const actionTracking = ({ getState }) => next => (action) => {
  if (action.type !== 'SettingsState/UPDATE_LI') {
    Analytics.trackEvent('ReduxAction', { type: action.type });
  }
  return next(action);
};

export default actionTracking;
