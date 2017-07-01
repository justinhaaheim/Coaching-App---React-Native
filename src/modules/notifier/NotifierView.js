/**
  Name: NotifierView

  Description:

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React, {PropTypes, Component} from 'react';
import NotificationsIOS from 'react-native-notifications';
import random from 'lodash.random';

class NotifierView extends Component {

  constructor() {
    super()
    NotificationsIOS.addEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.addEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
    // NotificationsIOS.requestPermissions();
    NotificationsIOS.consumeBackgroundQueue(); // Process all notifications that happened before javascript engine went online
  }

  componentDidUpdate() {
    console.log("Notifier component updated.");
    const {notificationsEnabled} = this.props;

    // Clear all scheduled notifications
    NotificationsIOS.cancelAllLocalNotifications();

    if (notificationsEnabled) {
      console.log("Requesting Permissions...");
      // Request permissions only if notifications are enabled.
      NotificationsIOS.requestPermissions();

      // If notifications are enabled, schedule them
      this.scheduleNotifications();
    }
  }

  componentDidMount() {}

  componentWillUnmount() {
    // prevent memory leaks!
    NotificationsIOS.removeEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.removeEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
  }

  // Schedule for two weeks out, currently
  scheduleNotifications() {
    console.log("Scheduling notifications...");

    if (__DEV__) {
      this.scheduleNotificationForTime({offset: 10 *1000}); // 10s from now
    }

    for (let i = 0; i < 14; i++) {  // For the next 14 days
      this.scheduleNotificationForTime({
        hours: random(8, 11),
        minutes: random(0, 59),
        dayOffset: i
      });
      this.scheduleNotificationForTime({
        hours: random(12, 6),
        minutes: random(0, 59),
        dayOffset: i
      });
    }
    // this.scheduleNotificationForTime({hours: 8, minutes: 50});
    // this.scheduleNotificationForTime({hours: 12, minutes: 50});
    // this.scheduleNotificationForTime({hours: 16, minutes: 50});
  }

  scheduleNotificationForTime({
    hours = undefined,
    minutes = undefined,
    dayOffset = 0,
    offset = undefined
  }) {
    // time = {  // 9:30am
    //   hours: 9,
    //   minutes: 30,
    //   dayOffset: 0  // 0 = today, 1 = tomorrow
    // }

    let fireDate = new Date(Date.now() + dayOffset * (24 * 60 * 60 * 1000));

    if (hours && minutes) {
      fireDate.setHours(hours);
      fireDate.setMinutes(minutes);
    }
    if (offset) {
      fireDate = new Date(fireDate.valueOf() + offset);
    }

    // At some point I may want to keep track of these in the application state
    const options = {
      fireDate: fireDate.toISOString(),
      alertBody: "Bring clarity, focus, ease and grace to this moment.",
      alertTitle: "Is it time to set the Coaching Arena?",
      alertAction: "Click here to open Empower App",
      soundName: "chime.aiff",
      category: "ARENA_REMINDER",
      // repeatInterval: "day",
      // userInfo: {}
    };

    let localNotification = NotificationsIOS.localNotification(options);
    console.log(`Notification scheduled for ${options.fireDate}`);
  }

  onPushRegistered(deviceToken) {
    console.log("Push Notifications - Device Token Received", deviceToken);
  }

  onPushRegistrationFailed(error) {
    // For example:
    //
    // error={
    //   domain: 'NSCocoaErrorDomain',
    //   code: 3010,
    //   localizedDescription: 'remote notifications are not supported in the simulator'
    // }
    console.log(error);
  }

  render() {
    return null;
    // We don't need to render anything
  }
}

export default NotifierView;
