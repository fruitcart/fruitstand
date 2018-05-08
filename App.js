import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// For in-app Navigation screen to screen
import { createStackNavigator } from 'react-navigation'

// Screens
import MainScreen from './components/MainScreen';


export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main : {
    screen: MainScreen 
  } 
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
