/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Theme from './hsl.theme';
import { ThemeProvider } from 'styled-components';
import { Button, NewsFeedItem } from 'hsl-shared-components/lib/native';

export default class testi extends Component {
  render() {
    const TODAY_2PM = new Date();
    TODAY_2PM.setHours(14, 0, 0, 0);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native 123!
        </Text>
        <ThemeProvider theme={Theme}>
          <View>
            <Button primary><Text>ABC 123</Text></Button>
            <NewsFeedItem
              category="example"
              title="example example example example"
              timestamp={TODAY_2PM}
              image="https://placehold.it/500x500"
            />
          </View>
        </ThemeProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testi', () => testi);
