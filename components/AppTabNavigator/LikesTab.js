import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class LikesTab extends Component {
  // our render function, which tells the app what to display
  render() {
    return <View style={styles.container}>
        <Text>LikesTab</Text>
      </View>;
  }
}

export default LikesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
