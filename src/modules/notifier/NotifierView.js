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

class NotifierView extends Component {

  constructor() {
    super()
    NotificationsIOS.addEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.addEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
    NotificationsIOS.requestPermissions();
    NotificationsIOS.consumeBackgroundQueue(); // Process all notifications that happened before javascript engine went online
  }

  componentDidUpdate() {
    console.log("Notifier component updated.");
    const {notificationsEnabled} = this.props;

    // Clear all scheduled notifications
    NotificationsIOS.cancelAllLocalNotifications();

    // If notifications are enabled, schedule them
    if (notificationsEnabled) {
      this.scheduleNotifications();
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    // prevent memory leaks!
    NotificationsIOS.removeEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.removeEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
  }

  scheduleNotifications() {
    console.log("Scheduling notifications...");
    this.scheduleNotificationForTime({hours: 8, minutes: 50});
    this.scheduleNotificationForTime({hours: 12, minutes: 50});
    this.scheduleNotificationForTime({hours: 4, minutes: 50});
  }

  scheduleNotificationForTime(time) {
    // time = {  // 9:30am
    //   hours: 9,
    //   minutes: 30,
    // }

    let fireDate = new Date();
    if (time.hours) {
      fireDate.setHours(time.hours);
      fireDate.setMinutes(time.minutes);
      if (fireDate < Date.now()) {
        // add 24 hours
        fireDate = new Date(fireDate.valueOf() + 24 * 60 * 60 * 1000);
      }
    } else if (time.offset) {
      fireDate = new Date(fireDate.valueOf() + time.offset)
    }

    // At some point I may want to keep track of these in the application state
    let localNotification = NotificationsIOS.localNotification({
      fireDate: fireDate.toISOString(),
      alertBody: "Bring clarity, focus, ease and grace to this moment.",
      alertTitle: "Is it time to set the Coaching Arena?",
      alertAction: "Click here to open Empower App",
      soundName: "chime.aiff",
      category: "ARENA_REMINDER",
      repeatInterval: "day",
      // userInfo: {}
    });
    console.log(localNotification);
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
