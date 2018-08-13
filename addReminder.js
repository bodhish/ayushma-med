import React from "react";
import { Button, Image, View, Text } from "react-native";
import { StackNavigator } from "react-navigation"; // Version can be specified in package.json

class DetailsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "some default value");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
module.exports = DetailsScreen;
