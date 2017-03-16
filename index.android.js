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

import Dimensions from 'Dimensions';
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={{height:height,width:width}}
          // source={{uri:'https://stage3.ipsy.com/?stagepass=glamination'}}
          source={{uri:'https://www.ipsy.com'}}
        ></WebView>
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
