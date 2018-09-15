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
    AsyncStorage.getItem(JSON.stringify("settings"), (err, result) => {
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
    this.saveSettings();
    this.props.navigation.navigate("Home");
  }

  saveSettings() {
    let settings = {
      morning_time: this.state.morning,
      afternoon_time: this.state.afternoon,
      night_time: this.state.night
    };
    AsyncStorage.setItem(JSON.stringify("settings"), JSON.stringify(settings));
  }
  async timePickerM(value) {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({ morning: hour + ":" + minute });
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
        this.setState({ afternoon: hour + ":" + minute });
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
        this.setState({ night: hour + ":" + minute });
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
          <Image
            source={require("./res/logo.png")}
            style={{ width: 150, height: 150 }}
          />
          <Text
            style={{
              color: "grey",
              paddingLeft: 10,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
              fontSize: 20
            }}
          >
            How do you define Time?
          </Text>

          <TouchableOpacity
            style={styles.app__timeSelect}
            onPress={this.timePickerM.bind(this)}
          >
            <View>
              <Text
                style={{
                  paddingLeft: 10,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginBottom: 10,
                  fontSize: 18
                }}
              >
                Morning: {this.state.morning}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.app__timeSelect}
            onPress={this.timePickerA.bind(this)}
          >
            <View>
              <Text
                style={{
                  paddingLeft: 10,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginBottom: 10,
                  fontSize: 18
                }}
              >
                Afternoon: {this.state.afternoon}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.app__timeSelect}
            onPress={this.timePickerN.bind(this)}
          >
            <View>
              <Text
                style={{
                  paddingLeft: 10,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginBottom: 10,
                  fontSize: 18
                }}
              >
                Night: {this.state.night}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.app__SettingsCloseButton}
          onPress={this.handleBackButton.bind(this)}
        >
          <View>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                fontSize: 18
              }}
            >
              Save Settings
            </Text>
          </View>
        </TouchableOpacity>
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
  app__Settings: {
    flex: 5,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",

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
    borderRadius: 20
  },
  app__timeSelect: {
    flex: 1,
    width: 300,
    maxHeight: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#16CB93",

    borderRadius: 20
  }
});

module.exports = Settings;
