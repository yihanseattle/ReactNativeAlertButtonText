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
  WebView,
  View
} from 'react-native';

var { SimpleAlertExampleBlock } = require('./src/AlertExample');

export default class AwesomeProject extends Component {
  render() {
    return (
      <SimpleAlertExampleBlock />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
