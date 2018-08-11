import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { green } from "./node_modules/ansi-colors";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app__root}>
        <View style={styles.app__headder}>
        </View>
        <View style={styles.app__body}>

          {/* {<Image source={require("./res/logo.png")} style={styles.app__headerLogo} />} */}
          <Text
            style={{
              fontSize: 20
            }}
          >
            Medication Reminder
          </Text>
        </View>
        <View style={styles.app__footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app__root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  app__headder: { flex: 1, backgroundColor: "#39be88" },
  app__body: { flex: 8, backgroundColor: "#fff" },
  app__footer: { flex: 1, marginTop: 20, backgroundColor: "#27885f" },
  app__headderLogo: {height: 1, width:  1}

});
