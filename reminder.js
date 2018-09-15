import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  AsyncStorage,
  StyleSheet
} from "react-native";
import Card from "./card";
<StatusBar hidden={true} />;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      morning: false,
      afternoon: false,
      night: false,
      reminders: []
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData() {
    AsyncStorage.getAllKeys((err, keys) => {
      keys.pop("settings");
      AsyncStorage.multiGet(keys).then(data => {
        this.setState({ reminders: data });
      });
    });
  }

  addNewReminder(event) {
    event.preventDefault();
    this.props.navigation.navigate("AddReminder", {
      getData: this.getData.bind(this)
    });
    this.getData();
  }

  loadSettings() {
    this.props.navigation.navigate("Settings");
  }

  render() {
    let reminderData = this.state.reminders;
    return (
      <View style={styles.app__root}>
        <View style={styles.app__header}>
          <View style={{ flex: 5, flexDirection: "row" }}>
            <Image
              source={require("./res/logo_head.png")}
              style={{ marginLeft: 22, marginTop: 20, width: 60, height: 60 }}
            />
            <Text
              style={{
                marginTop: 35,
                marginLeft: 10,
                marginRight: 10,
                fontSize: 40,
                color: "#16CB93"
              }}
            >
              REMINDERS
            </Text>
          </View>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={this.loadSettings.bind(this)}
          >
            <Text
              style={{
                fontSize: 40,
                fontFamily: "FontAwesome",
                color: "#6C6C6C",
                marginTop: 40,
                paddingBottom: 10,
                marginRight: 10
              }}
            >
              &#xf013;
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.app__body}>
          {reminderData.reverse().map((result, i, store) => {
            key = store[i][0];
            value = JSON.parse(store[i][1]);
            return (
              <Card
                key={key}
                id={key}
                name={value.name}
                morning={value.morning}
                afternoon={value.afternoon}
                night={value.night}
                date={value.date}
                getData={this.getData.bind(this)}
              />
            );
          })}
        </ScrollView>
        <TouchableOpacity
          onPress={this.addNewReminder.bind(this)}
          style={{
            borderWidth: 8,
            borderColor: "rgba(255, 255, 255, .9)",
            // borderColor: "#Fff",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            position: "absolute",
            bottom: 10,
            right: 10,
            height: 80,
            backgroundColor: "#rgba(22, 203, 147, .9)",
            borderRadius: 100
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "#fff",
              fontWeight: "bold",
              marginBottom: 5
            }}
          >
            +
          </Text>
        </TouchableOpacity>
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
    backgroundColor: "#fff",
    height: 80
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
