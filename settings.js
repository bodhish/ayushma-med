import React from "react";
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
  Text,
  TimePickerAndroid,
  Image,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      morning: "08:00",
      afternoon: "12:00",
      night: "20:00"
    };
  }
  componentDidMount = () => {
    AsyncStorage.getItem("settings", (err, result) => {
      if (result) {
        var data = JSON.parse(result);
        this.setState({
          morning: data.morning_time,
          afternoon: data.afternoon_time,
          night: data.night_time
        });
      }
    });
  };
  handleBackButton() {
    this.props.navigation.navigate("Home");
  }
  handleSaveButton() {
    this.saveSettings();
    this.props.navigation.navigate("Home");
  }

  saveSettings() {
    let settings = {
      morning_time: this.state.morning,
      afternoon_time: this.state.afternoon,
      night_time: this.state.night
    };
    AsyncStorage.setItem("settings", JSON.stringify(settings));
  }
  async timePickerM(value) {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        if (9 >= hour) {
          var newHour = "0" + hour;
        } else {
          var newHour = hour;
        }
        if (9 >= minute) {
          var newMinute = "0" + minute;
        } else {
          var newMinute = minute;
        }
        this.setState({ morning: newHour + ":" + newMinute });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }

  async timePickerA(value) {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        if (9 >= hour) {
          var newHour = "0" + hour;
        } else {
          var newHour = hour;
        }
        if (9 >= minute) {
          var newMinute = "0" + minute;
        } else {
          var newMinute = minute;
        }
        this.setState({ afternoon: newHour + ":" + newMinute });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }

  async timePickerN(value) {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        if (9 >= hour) {
          var newHour = "0" + hour;
        } else {
          var newHour = hour;
        }
        if (9 >= minute) {
          var newMinute = "0" + minute;
        } else {
          var newMinute = minute;
        }
        this.setState({ night: newHour + ":" + newMinute });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#16CB93"
        }}
      >
        <View style={styles.app__SettingsHeader}>
          <Text
            style={{
              color: "#fff",
              paddingLeft: 10,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
              fontSize: 28
            }}
          >
            Settings
          </Text>
        </View>
        <View style={styles.app__Settings}>
          <View style={styles.app__CardHeader}>
            <Image
              source={require("./res/logo.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text
              style={{
                flex: 1,
                color: "#08cb88",
                paddingLeft: 20,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                fontSize: 28
              }}
            >
              EDIT TIME
            </Text>
          </View>

          <TouchableOpacity
            style={styles.app__timeSelect}
            onPress={this.timePickerM.bind(this)}
          >
            <View style={styles.app__cards}>
              <View style={{ paddingLeft: 20, flex: 1 }}>
                <Text style={styles.app__fontIcon}>&#xf185;</Text>
              </View>
              <View style={styles.app__cardRight}>
                <Text style={styles.app__time}>{this.state.morning}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.app__timeSelect}
            onPress={this.timePickerA.bind(this)}
          >
            <View style={styles.app__cards}>
              <View style={{ paddingLeft: 20, flex: 1 }}>
                <Text style={styles.app__fontIcon}>&#xf111;</Text>
              </View>
              <View style={styles.app__cardRight}>
                <Text style={styles.app__time}>{this.state.afternoon}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.app__timeSelect}
            onPress={this.timePickerN.bind(this)}
          >
            <View style={styles.app__cards}>
              <View style={{ paddingLeft: 20, flex: 1 }}>
                <Text style={styles.app__fontIcon}>&#xf186;</Text>
              </View>
              <View style={styles.app__cardRight}>
                <Text style={styles.app__time}>{this.state.night}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.app___notifyFooter}>
          <TouchableOpacity
            style={styles.app__notifyButton}
            onPress={this.handleBackButton.bind(this)}
          >
            <View>
              <Text
                style={{
                  fontFamily: "FontAwesome",
                  fontSize: 40
                }}
              >
                &#xf060;
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.app__notifyButton}
            onPress={this.handleSaveButton.bind(this)}
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

const styles = StyleSheet.create({
  app__SettingsHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16CB93"
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
  app__cards: {
    flex: 1,
    flexDirection: "row"
  },
  app__cardRight: {
    flex: 3
  },
  app__Settings: {
    flex: 5,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#fff",
    borderWidth: 0,
    borderRadius: 20
  },
  app__SettingsCloseButton: {
    flex: 1,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#fff",

    borderColor: "#fff",
    borderWidth: 0,
    height: 20,
    width: 20,
    borderRadius: 100
  },
  app__timeSelect: {
    flex: 1,
    width: 300,
    maxHeight: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
    elevation: 4,

    borderRadius: 20
  },
  app___notifyFooter: {
    flex: 2,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    flexDirection: "row"
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
  app__fontIcon: {
    paddingTop: 15,
    paddingLeft: 20,
    fontFamily: "FontAwesome",
    fontSize: 50,
    color: "#16CB93"
  },
  app__time: {
    fontWeight: "bold",
    marginTop: 15,
    paddingLeft: 20,
    fontSize: 40
  }
});

module.exports = Settings;
