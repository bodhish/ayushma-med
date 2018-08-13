import React from "react";
import { Button, Image, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
// Version can be specified in package.json

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require("./res/logo.png")}
        style={{ marginLeft: 10, width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here"
            });
          }}
        />
      </View>
    );
  }
}

module.exports = HomeScreen;
