import React, { PropTypes, Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Separator,
  StyleProvider,
  Switch,
} from 'native-base';
import codePush from 'react-native-code-push';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

import projectPackage from '../../../package.json';

class SettingsView extends Component {
  static displayName = 'SettingsView';

  static navigationOptions = {
    title: 'Settings',
  };

  static propTypes = {
    mleEnabled: PropTypes.bool.isRequired,
    notificationsEnabled: PropTypes.bool.isRequired,
    appVersion: PropTypes.string.isRequired,
    settingsStateActions: PropTypes.shape({
      toggleArenaVersion: PropTypes.func.isRequired,
      toggleNotifications: PropTypes.func.isRequired,
      setAppVersion: PropTypes.func.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  // async getAppVersion() {
  //   const { appVersion } = await codePush.getConfiguration();
  //   console.log(appVersion);
  //
  //   const meta = await codePush.getUpdateMetadata();
  //   if (!meta) return { appVersion };
  //
  //   const { label } = meta;
  //   return { appVersion, label };
  // }

  componentDidMount() {
    // const { setAppVersion } = this.props.settingsStateActions;
    // const { appVersion, label } = this.getAppVersion();
    // setAppVersion(`${appVersion} ${label}`);
    // console.log('App version set!');
  }

  render() {
    const { toggleArenaVersion, toggleNotifications } = this.props.settingsStateActions;
    const { mleEnabled, notificationsEnabled, appVersion } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container style={StyleSheet.flatten(styles.container)}>
          <Content>
            <List style={StyleSheet.flatten(styles.whiteBg)}>
              <ListItem itemHeader style={{ backgroundColor: '#efeff3' }} bordered>
                <Text>COACHING ARENA</Text>
              </ListItem>

              <ListItem icon>
                <Left>
                  <Icon name="ios-list-box-outline" />
                </Left>
                <Body>
                  <Text>MLE/TCI Version</Text>
                </Body>
                <Right>
                  <Switch onValueChange={() => toggleArenaVersion()} value={mleEnabled} />
                </Right>
              </ListItem>

              <ListItem icon>
                <Left>
                  <Icon name="ios-notifications" />
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text>Remind me to set the arena</Text>
                </Body>
                <Right style={{ borderBottomWidth: 0 }}>
                  <Switch
                    onValueChange={() => toggleNotifications()}
                    value={notificationsEnabled}
                  />
                </Right>
              </ListItem>

              <Separator style={{ backgroundColor: '#efeff3' }} bordered />

              <ListItem
                icon
                onPress={() => {
                  navigate('LiEntry', {
                    title: "Life's Intentions",
                  });
                }}
              >
                <Left>
                  <Icon name="ios-body" />
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text>
                    {"Edit Life's Intentions"}
                  </Text>
                </Body>
                <Right style={{ borderBottomWidth: 0 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <Separator style={{ backgroundColor: '#efeff3' }} bordered />

              <ListItem icon onPress={() => navigate('Credits')}>
                <Left>
                  <Icon name="ios-ribbon" />
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text>Credits & Acknowledgements</Text>
                </Body>
                <Right style={{ borderBottomWidth: 0 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <Separator style={{ backgroundColor: '#efeff3' }} bordered />

              <ListItem icon>
                <Left>
                  <Text>
                    {'App Version'}
                  </Text>
                </Left>
                <Body style={{ borderBottomWidth: 0 }} />
                <Right style={{ borderBottomWidth: 0 }}>
                  <Text>
                    {projectPackage.version}
                  </Text>
                </Right>
              </ListItem>

              <Separator
                style={{
                  backgroundColor: '#efeff3',
                  borderBottomWidth: 0,
                }}
                bordered
              />
            </List>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efeff3',
  },
  listBg: {
    backgroundColor: '#efeff3',
  },
  whiteBg: {
    backgroundColor: 'white',
  },
});

export default SettingsView;
