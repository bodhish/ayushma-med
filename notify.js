import React from "react";
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
  Text,
  Image,
  BackHandler,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import GestureRecognizer from "react-native-swipe-gestures";

class Notify extends React.Component {
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
    BackHandler.exitApp();
    return true;
  }

  render() {
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
              color: "#fff",
              paddingLeft: 10,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
              fontSize: 28
            }}
          >
            REMINDER
          </Text>
        </View>
        <View style={styles.app__notify}>
          <View>
            <Image
              source={require("./res/logo.png")}
              style={{ width: 150, height: 150 }}
            />
            <Text>Reminder Id {this.props.alarmID}</Text>
            <Text>Reminder Name {this.props.alarmID}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.app__notifyCloseButton}
          onPress={this.handleBackButtonClick.bind(this)}
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
Notify.propTypes = {
  alarmID: PropTypes.string
};
const styles = StyleSheet.create({
  app__notifyHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16CB93"
  },
  app__notify: {
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
  app__notifyCloseButton: {
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

module.exports = Notify;
