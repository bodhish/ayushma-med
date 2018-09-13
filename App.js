import React from "react";
import { createStackNavigator } from "react-navigation";
import Reminder from "./reminder";
import AddReminder from "./addReminder";
import PropTypes from "prop-types";

const RootStack = createStackNavigator(
  {
    Home: Reminder,
    AddReminder: AddReminder
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    console.log("Alarm ID " + this.props.alarmID);
    console.log("Missed Alarm ID " + this.props.missedAlarms);
    return <RootStack />;
  }

  static propTypes = {
    alarmID: PropTypes.string,
    missedAlarms: PropTypes.string
  };
}
