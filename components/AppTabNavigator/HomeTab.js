import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class HomeTab extends Component {
  // our render function, which tells the app what to display
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeTab</Text>
      </View>
    );
  }
}

export default HomeTab;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});