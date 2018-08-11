import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { green } from "./node_modules/ansi-colors";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app__root}>
        <View style={styles.app__headder} />
        <ScrollView style={styles.app__body}>
          {<Image source={require("./res/logo.png")} style={styles.app__headerLogo} />}
          <Text
            style={{
              fontSize: 20
            }}
          >
            Medication Reminder
          </Text>
          <View style={styles.app__cards} />
          <View style={styles.app__cards} />
          <View style={styles.app__cards} />
          <View style={styles.app__cards} />
        </ScrollView>
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
  app__body: { flex: 8, flexDirection: 'column', backgroundColor: "#fff" },
  app__footer: { flex: 1, marginTop: 20, backgroundColor: "#27885f" },
  app__headderLogo: { height: 1, width: 1 },
  app__cards: { flex: 1, marginTop:2, marginBottom: 2, backgroundColor: "#000", maxHeight: 200 }
});
