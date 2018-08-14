import React from "react";
import { Button, Image, View, Text, TextInput, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation"; // Version can be specified in package.json

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: { id: 1, name: "Paracatamol 5mg", dosage: "", numberOfDays: 3 }
    };
    this.saveInput = this.saveInput.bind(this);
  }

  saveInput(event) {
    this.setState({ reminders: { name: event.target.value } });
  }

  render() {
    return (
      <View style={styles.addReminder__root}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.app__cards}>
            <View style={styles.app__cardRight}>
              <TextInput
              underlineColorAndroid='transparent'
                style={{
                  color: "#FAFA32",
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingTop: 45,
                  marginLeft: 10,
                  borderColor: "#16CB93"
                }}
                onChangeText={(text) =>this.setState({ reminders: { name: text } })}
                placeholder={"✎ Enter your Med name!"}
              />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  paddingBottom: 20
                }}
              >
                Morning | Evening | Night
              </Text>
            </View>
            <View style={styles.app__cardLeft}>
              <View style={styles.app__cardLeftCircle}>
                <View style={styles.circleContainer}>
                  <Text
                    style={{
                      color: "#6C6C6C",
                      fontWeight: "bold",
                      fontSize: 60
                    }}
                  >
                    {this.state.reminders.numberOfDays}
                  </Text>
                </View>
              </View>
              <View style={styles.app__cardLeftText}>
                <Text
                  style={{
                    color: "#fff",
                    paddingLeft: 10,
                    fontSize: 15,
                    paddingTop: 45
                  }}
                >
                  days
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Button
            title="Add Reminder"
            color="#16CB93"
            onPress={() => this.props.navigation.navigate("Home")}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addReminder__root: {
    flex: 1,
    backgroundColor: "#fff"
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
    borderRadius: 20
  },
  app__cardRight: {
    flex: 2
  },
  app__cardLeft: {
    flex: 1,
    flexDirection: "column"
  },
  app__cardLeftText: {
    flex: 1,
    marginBottom: 15,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  app__cardLeftCircle: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  circleContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 90,
    height: 90,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  }
});
module.exports = DetailsScreen;
