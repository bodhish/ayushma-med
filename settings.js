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
      morning: false,
      afternoon: false,
      night: false
    };
  }

  handleBackButton() {
    this.props.navigation.navigate("Reminder");
  }

  timePicker() {
    try {
      const { action, hour, minute } = TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
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
          <View>
            <Image
              source={require("./res/logo.png")}
              style={{ width: 150, height: 150 }}
            />
            <Text>Reminder Id </Text>
            <Text>Reminder Name </Text>
          </View>
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
              CLOSE REMINDER
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
  }
});

module.exports = Settings;
