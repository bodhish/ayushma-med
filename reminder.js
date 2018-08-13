import React from "react";
import {
  Button,
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet
} from "react-native";

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
  constructor(props) {
    super(props);
    this.state = { text: "Add your med name", time: 1 };
    this.saveInput = this.saveInput.bind(this);
  }

  saveInput(event) {
    perviousValue = this.state.time;
    Alert.alert("You tapped the button!");
    this.setState({ time: perviousValue + 1 });
  }
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={styles.app__root}>
        <View style={styles.app__headder}>
          <Text
            style={{
              fontSize: 40,
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            REMINDER s
          </Text>
        </View>
        <ScrollView style={styles.app__body}>
          <View style={styles.app__cards}>
            <View style={styles.app__cardLeft} />
            <View style={styles.app__cardRight}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Paracatamol 5mg
              </Text>
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
          </View>
          <View style={styles.app__cards} />
          <View style={styles.app__cards} />
          <View style={styles.app__cards} />
          <View style={styles.app__cards} />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate("AddReminder", {
                  itemId: 86,
                  otherParam: "anything you want here"
                });
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app__root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  app__headder: {
    flex: 1,
    backgroundColor: "#16CB93",
    maxHeight: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  app__body: {
    flex: 4,
    marginTop: 10,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  app__footer: {
    flex: 1,
    maxHeight: 80,
    backgroundColor: "#27885f"
  },
  app__cards: {
    flexDirection: "row",
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#16CB93",
    maxHeight: 200,
    borderColor: "#fff",
    borderWidth: 0,
    borderRadius: 5
  },
  app__cardLeft: {
    flex:1,
  },
  app__cardRight: {
    flex:2
  },
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
  }
});

module.exports = HomeScreen;
