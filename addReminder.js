import React from "react";
import { Button, Image, View, Text, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation"; // Version can be specified in package.json

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Add your med name" };
    this.saveInput = this.saveInput.bind(this);
  }

  saveInput(event) {
    perviousValue = this.state.time;
    Alert.alert("You tapped the button!");
    this.setState({ time: perviousValue + 1 });
  }

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
        <View style={styles.circleContainer}>

        </View>
        <View style={styles.app__buttonView}>
          <Button
            onPress={this.saveInput}
            style={styles.app__button}
            title="Morning"
          />
          <Button
            onPress={this.saveInput}
            style={styles.app__button}
            title="Noon"
          />
          <Button
            onPress={this.saveInput}
            style={styles.app__button}
            title="Night"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app__buttonView: {
    marginLeft: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 40,
    maxWidth: 250
  },
  app__button: {
    backgroundColor: "#27885f",
    width: 40,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10
  },
  circleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  }
});
module.exports = DetailsScreen;
