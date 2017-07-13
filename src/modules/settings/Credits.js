import React from 'react';

import { Container, Content, Text } from 'native-base';

const Credits = () =>
  (<Container style={styles.container}>
    <Content>
      <Text style={styles.textBlock}>
        {"The Coaching Arena and Life's Intentions © 2017 The Academy for Coaching Excellence"}
      </Text>
      <Text style={styles.textBlock}>
        {'Monkey app icon made by Freepik from www.flaticon.com'}
      </Text>
    </Content>
  </Container>);

Credits.navigationOptions = {
  title: 'Acknowledgements',
};

const styles = {
  container: {
    padding: 15,
  },
  textBlock: {
    marginBottom: 15,
    fontStyle: 'italic',
  },
};

export default Credits;
