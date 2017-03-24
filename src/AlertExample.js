'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = ReactNative;

var UIExplorerBlock = require('./UIExplorerBlock');

// corporate ipsum > lorem ipsum
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';

/**
 * Simple alert examples.
 */
class SimpleAlertExampleBlock extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            null,
            [
              {text: 'Foo123456789', onPress: () => console.log('Foo Pressed!')},
              {text: 'Bar123456789', onPress: () => console.log('Bar Pressed!')},
              {text: 'Baz123456789', onPress: () => console.log('Baz Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>Alert with three buttons</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class AlertExample extends React.Component {
  static title = 'Alert';

  static description = 'Alerts display a concise and informative message ' +
  'and prompt the user to make a decision.';

  render() {
    return (
      <UIExplorerBlock title={'Alert'}>
        <SimpleAlertExampleBlock />
      </UIExplorerBlock>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

module.exports = {
  AlertExample,
  SimpleAlertExampleBlock,
};
