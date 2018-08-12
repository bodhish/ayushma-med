import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { green } from "./node_modules/ansi-colors";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app__root}>
        <View style={styles.app__headder}>
          <Text
            style={{
              fontSize: 20
            }}
          >
            Ayushma
          </Text>
        </View>
        <ScrollView style={styles.app__body}>
          {/* {
            <Image
              source={require("./res/logo.png")}
              style={styles.app__headerLogo}
            />
          } */}

          <View style={styles.app__cards}>
            <Text
              style={{
                fontSize: 20
              }}
            >
              Medication Reminde new
            </Text>
          </View>
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
  app__headder: {
    flex: 1,
    backgroundColor: "#27885f",
    maxHeight: 100
  },
  app__body: { flex: 4, flexDirection: "column", backgroundColor: "#fff" },
  app__footer: {
    flex: 1,
    maxHeight: 80,
    backgroundColor: "#27885f"
  },
  app__headderLogo: { height: 1, width: 1 },
  app__cards: {
    height: 200,
    margin: 4,
    backgroundColor: "#3abf89",
    maxHeight: 200,
  }
});
