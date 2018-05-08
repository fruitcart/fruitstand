import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class MainScreen extends Component {
  // our render function, which tells the app what to display
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Main Screen</Text>
      </View>
    )
  }
}

export default MainScreen;

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})