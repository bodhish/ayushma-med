import React from "react";
import { createStackNavigator } from "react-navigation";
import Reminder from "./reminder";
import AddReminder from "./addReminder";

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
    return <RootStack />;
  }
}
