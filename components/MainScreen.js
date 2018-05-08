import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

// Tab Screens
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

// Tab Navigator
import {createTabNavigator} from 'react-navigation';
// Native Base UI Tools
import { Icon } from 'native-base';

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 15 }} />,
    title: 'fruitstand',
    headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 15 }} />
  };

  // our render function, which tells the app what to display
  render() {
    return ( <AppTabNavigator/> )
    // <View style={styles.container}>
    //   <Text>This is the Main Screen</Text>
    // </View>
  }
}

export default MainScreen;

const AppTabNavigator = createTabNavigator(
  {
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      // required to show on android
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      activeTintColor: "#6b52ae", // change this to official fruitstand colors
      inactiveTintColor: "#000",
      showLabel: false, // remove the text under tabs
      showIcon: true
    }
  }
);


const styles =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})