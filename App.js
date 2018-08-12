import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  ScrollView
} from "react-native";
import { green } from "./node_modules/ansi-colors";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Add your med name", time: 1 };
    this.saveInput = this.saveInput.bind(this);
  }

  saveInput(event) {
    perviousValue = this.state.time
    this.setState({ time: perviousValue + 1 });
  }
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
          <Text
            style={{
              fontSize: 20
            }}
          >
            {this.state.text},{this.state.time}
          </Text>
          <View style={styles.app__cards}>
            <TextInput
              style={{ height: 40, margin: 5 }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Button
              onPress={this.saveInput}
              title="Morning"
              color="#27885f"
              accessibilityLabel="Learn more about this purple button"
            />
             <Button
              onPress={this.saveInput}
              title="Afternoon"
              color="#27885f"
              accessibilityLabel="Learn more about this purple button"
            />
             <Button
              onPress={this.saveInput}
              title="Evening"
              color="#27885f"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
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
    height: 150,
    margin: 4,
    backgroundColor: "#ecebeb",
    maxHeight: 200
  }
});
