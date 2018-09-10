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
      numberOfDays: 1
    };
  }

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />
  };

  componentDidMount = () => {
    this.getData();
  };

  getData() {
    AsyncStorage.getItem("0", (err, result) => {
      console.log("result" + result);
      data = JSON.parse(result);
      this.setState({
        name: data.name,
        morning: data.morning,
        afternoon: data.afternoon,
        night: data.night,
        numberOfDays: data.numberOfDays
      });
      console.log(data.morning);
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
          <Card
            name={this.state.name}
            numberOfDays={parseInt(this.state.numberOfDays)}
          />
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
  HeaderCircle: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
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
