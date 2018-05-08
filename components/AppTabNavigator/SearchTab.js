import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// Native Base UI Tools
import { Icon } from "native-base";

class SearchTab extends Component {
  // some settings to configure this tab view and its icon
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };

  // our render function, which tells the app what to display
  render() {
    return (
      <View style={styles.container}>
        <Text>SearchTab</Text>
      </View>
    );
  }
}

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
