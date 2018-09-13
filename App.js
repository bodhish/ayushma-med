import React from "react";
import { createStackNavigator } from "react-navigation";
import Reminder from "./reminder";
import AddReminder from "./addReminder";
import Notify from "./notify";
import PropTypes from "prop-types";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRouteName: "Home"
    };
  }

  render() {
    const RootStack = createStackNavigator(
      {
        Home: Reminder,
        AddReminder: AddReminder,
        Notify: Notify
      },
      {
        initialRouteName: "Home"
      }
    );
    this.props.newID = this.props.alarmID;
    console.log("Alarm ID " + this.props.alarmID);
    console.log(this.props.alarmID == null);
    console.log("Missed Alarm ID " + this.props.missedAlarms);
    return this.props.alarmID ? (
      <Notify alarmID={this.props.alarmID} />
    ) : (
      <RootStack />
    );
  }

  static propTypes = {
    alarmID: PropTypes.string,
    missedAlarms: PropTypes.string
  };
}
