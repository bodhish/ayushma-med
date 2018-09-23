import React from "react";
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  Text,
  Image,
  ScrollView,
  BackHandler,
  StyleSheet,
  ToastAndroid
} from "react-native";
import PropTypes from "prop-types";
import NotifyCards from "./notifyCards";

import {
  PlaySound,
  StopSound,
  PlaySoundRepeat,
  PlaySoundMusicVolume
} from "react-native-play-sound";

import AndroidAlarms from "react-native-android-alarms";

class Notify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      morning: false,
      afternoon: false,
      night: false,
      reminders: [],
      morning_time: "08:00",
      afternoon_time: "12:00",
      night_time: "20:00"
    };
  }

  componentDidMount = () => {
    PlaySoundRepeat("bells");
    this.getData();
  };

  // TO DO: Setup Sound, Vibration< Display Alarm Details
  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  handleBackButtonClick() {
    StopSound();
    BackHandler.exitApp();
    return true;
  }

  handleSnooze() {
    ToastAndroid.show("Alarm Snoozed for 30 mins", ToastAndroid.SHORT);
    var today = new Date();
    today.setDate(today.getMinutes() + 30);
    AndroidAlarms.setAlarm(this.props.alarmID + "_s", today.valueOf(), false);
    this.handleBackButtonClick();
  }

  getData() {
    AsyncStorage.getItem("settings", (err, result) => {
      if (result) {
        var data = JSON.parse(result);
        this.setState({
          morning_time: data.morning_time,
          afternoon_time: data.afternoon_time,
          night_time: data.night_time
        });
      }
    });
    AsyncStorage.getAllKeys((err, keys) => {
      const newKeys = keys.filter(e => e !== "settings");
      console.log(newKeys);
      AsyncStorage.multiGet(newKeys).then(data => {
        this.setState({ reminders: data });
      });
    });
  }

  checkTIme(key, value) {
    var today = new Date();
    const currentTIme = today.getHours();
    if (currentTIme <= 1 + parseInt(this.state.morning_time.substr(0, 2))) {
      return value.morning ? this.showCards(key, value) : null;
    } else if (
      currentTIme <=
      1 + parseInt(this.state.afternoon_time.substr(0, 2))
    ) {
      return value.afternoon ? this.showCards(key, value) : null;
    } else if (
      currentTIme <=
      1 + parseInt(this.state.night_time.substr(0, 2))
    ) {
      return value.night ? this.showCards(key, value) : null;
    } else {
      return value.night ? this.showCards(key, value) : null;
    }
  }

  showCards(key, value) {
    return (
      <NotifyCards
        key={key}
        id={key}
        name={value.name}
        morning={value.morning}
        afternoon={value.afternoon}
        night={value.night}
      />
    );
  }

  render() {
    let reminderData = this.state.reminders;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#16CB93"
        }}
      >
        <View style={styles.app__notifyHeader}>
          <Text
            style={{
              fontFamily: "FontAwesomeBold",
              fontSize: 80,
              color: "#fff"
            }}
          >
            &#xf46b;
          </Text>
        </View>
        <View style={styles.app__notify}>
          <View style={styles.app__CardHeader}>
            <Image
              source={require("./res/logo.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text
              style={{
                color: "#08cb88",
                paddingLeft: 20,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                fontSize: 28
              }}
            >
              YOUR REMINDERS
            </Text>
          </View>
          <ScrollView style={styles.app__notify}>
            {reminderData.reverse().map((result, i, store) => {
              key = store[i][0];
              value = JSON.parse(store[i][1]);
              return this.checkTIme(key, value);
            })}
          </ScrollView>
        </View>
        <View style={styles.app___notifyFooter}>
          <TouchableOpacity
            style={styles.app__notifyButton}
            onPress={this.handleSnooze.bind(this)}
          >
            <View>
              <Text
                style={{
                  fontFamily: "FontAwesome",
                  fontSize: 40
                }}
              >
                &#xf0f3;
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.app__notifyButton}
            onPress={this.handleBackButtonClick.bind(this)}
          >
            <View>
              <Text
                style={{
                  fontFamily: "FontAwesome",
                  fontSize: 40
                }}
              >
                &#xf00c;
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
Notify.propTypes = {
  alarmID: PropTypes.string
};
const styles = StyleSheet.create({
  app__notifyHeader: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16CB93"
  },
  app__notify: {
    flex: 6
  },
  app__CardHeader: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    borderColor: "#fff",
    backgroundColor: "#fff",
    elevation: 6,
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  app__notifyButton: {
    marginLeft: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    height: 100,
    width: 100,
    borderColor: "#fff",
    borderWidth: 0,
    elevation: 6,
    borderRadius: 25
  },
  app___notifyFooter: {
    flex: 2,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    flexDirection: "row"
  }
});

module.exports = Notify;
