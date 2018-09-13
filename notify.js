import React from "react";
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
  Text,
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
    console.log(this.props.newId);

    return (
      <View>
        <TouchableOpacity onPress={this.handleBackButtonClick.bind(this)}>
          <View style={styles.app__cards}>
            <Text>{this.props.alarmID}</Text>
          </View>
          <View>
            <Text>This Is a Test Reminder</Text>
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
  }
});

module.exports = Notify;
