import React from "react";
import {
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  AsyncStorage,
  StyleSheet
} from "react-native";
import Card from "./card";

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
    this.state = {
      name: "",
      morning: false,
      afternoon: false,
      night: false,
      numberOfDays: 1,
      reminders: []
    };
  }

  static navigationOptions = {
    headerTitle: <LogoTitle />
  };

  componentDidMount = () => {
    this.getData();
  };

  getData() {
    AsyncStorage.getAllKeys((err, keys) => {
      console.log("keys " + keys);
      AsyncStorage.multiGet(keys).then(data => {
        this.setState({ reminders: data });
        // data.map((result, i, store) => {
        //   let key = store[i][0];
        //   let value = store[i][1];
        //   console.log("Key:  " + key);
        //   console.log("Value:  " + value);
        //   // this.setState({ reminders: {value} });
        // });
      });
    });
  }

  addNewReminder(event) {
    event.preventDefault();
    this.props.navigation.navigate("AddReminder", {
      getData: this.getData.bind(this)
    });
    this.componentDidMount();
  }

  render() {
    let reminderData = this.state.reminders;
    return (
      <View style={styles.app__root}>
        <View style={styles.app__header}>
          <View style={styles.app__headerText}>
            <Text
              style={{
                fontSize: 40,
                color: "#fff",
                marginTop: 90,
                marginLeft: 10,
                fontWeight: "bold"
              }}
            >
              REMINDERS
            </Text>
          </View>
          <View style={styles.app__HeaderCircleContainer}>
            <TouchableOpacity
              style={styles.app__button}
              onPress={this.addNewReminder.bind(this)}
            >
              <Text
                style={{
                  fontSize: 60,
                  color: "#6C6C6C",
                  fontWeight: "bold",
                  marginRight: 2
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.app__body}>
          {reminderData.map((result, i, store) => {
            key = store[i][0];
            value = JSON.parse(store[i][1]);
            return (
              <Card
                key={key}
                id={key}
                name={value.name}
                morning={value.morning}
                afternoon={value.afternoon}
                night={value.evening}
                numberOfDays={parseInt(value.numberOfDays)}
                getData={this.getData.bind(this)}
              />
            );
          })}
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
  app__header: {
    flexDirection: "row",
    backgroundColor: "#16CB93",
    height: 150
  },
  app__headerText: {
    flex: 3
  },
  app__HeaderCircleContainer: {
    flex: 1,
    marginTop: 15,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  app__body: {
    flex: 4,
    marginTop: 10,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  app__button: {
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 100,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

module.exports = HomeScreen;
