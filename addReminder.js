import React from "react";
import {
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  ToastAndroid,
  TextInput,
  StyleSheet
} from "react-native";

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      morning: false,
      afternoon: false,
      night: false,
      numberOfDays: 3
    };
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.addReminder__root}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.addReminder__cards}>
            <View style={styles.addReminder__cardLeft}>
              <TextInput
                underlineColorAndroid="transparent"
                style={{
                  color: "#FAFA32",
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingTop: 45,
                  marginLeft: 10,
                  borderColor: "#16CB93"
                }}
                onChangeText={text => this.setState({ name: text })}
                placeholder={"✎ Enter your Med name!"}
              />
              <View style={styles.addReminder__buttonGroup}>
                <View style={styles.app__HeaderCircleContainer}>
                  <TouchableOpacity
                    style={styles.app__button}
                    onPress={() => {
                      this.setState(prevState => ({
                        morning: !prevState.morning
                      }));
                    }}
                  >
                    <Text
                      style={
                        this.state.morning
                          ? styles.addReminder__morningTrue
                          : styles.addReminder__morning
                      }
                    >
                      ☼
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.app__HeaderCircleContainer}>
                  <TouchableOpacity
                    style={styles.app__button}
                    onPress={() => {
                      this.setState(prevState => ({
                        afternoon: !prevState.afternoon
                      }));
                    }}
                  >
                    <Text
                      style={
                        this.state.afternoon
                          ? styles.addReminder__afternoonTrue
                          : styles.addReminder__afternoon
                      }
                    >
                      ◉
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.app__HeaderCircleContainer}>
                  <TouchableOpacity
                    style={styles.app__button}
                    onPress={() => {
                      this.setState(prevState => ({
                        night: !prevState.night
                      }));
                    }}
                  >
                    <Text
                      style={
                        this.state.night
                          ? styles.addReminder__nightTrue
                          : styles.addReminder__night
                      }
                    >
                      ☾
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.addReminder__cardRight}>
              <View style={styles.addReminder__cardRightCircle}>
                <View style={styles.circleContainer}>
                  <Text
                    style={{
                      color: "#6C6C6C",
                      fontWeight: "bold",
                      fontSize: 60
                    }}
                  >
                    {this.state.numberOfDays}
                  </Text>
                </View>
              </View>
              <View style={styles.addReminder__cardRightText}>
                <Text
                  style={{
                    color: "#fff",
                    paddingLeft: 10,
                    fontSize: 15,
                    paddingTop: 45
                  }}
                >
                  days
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Button
          title="Add Reminder"
          color="#16CB93"
          onPress={() => {
            ToastAndroid.show('We will remind you :)', ToastAndroid.SHORT);
            this.props.navigation.navigate("Home")}}
        />
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  addReminder__root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  addReminder__cards: {
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
  },
  addReminder__cardLeft: {
    flex: 2
  },
  addReminder__cardRight: {
    flex: 1,
    flexDirection: "column"
  },
  addReminder__cardRightText: {
    flex: 1,
    marginBottom: 15,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  addReminder__cardRightCircle: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  circleContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 90,
    height: 90,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },

  HeaderCircle: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  app__button: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  addReminder__buttonGroup: {
    marginLeft: 30,
    marginTop: 10,
    flex: 1,
    flexDirection: "row"
  },
  addReminder__morning: {
    fontSize: 40,
    color: "#6C6C6C",
    paddingBottom: 12
  },
  addReminder__morningTrue: {
    fontSize: 40,
    color: "#108D23",
    paddingBottom: 12
  },
  addReminder__afternoon: {
    fontSize: 60,
    color: "#6C6C6C",
    paddingBottom: 10
  },
  addReminder__afternoonTrue: {
    fontSize: 60,
    color: "#108D23",
    paddingBottom: 10
  },
  addReminder__night: {
    fontSize: 40,
    color: "#6C6C6C",
    paddingRight: 5,
    transform: [{ rotate: "-30deg" }]
  },
  addReminder__nightTrue: {
    fontSize: 40,
    color: "#108D23",
    paddingRight: 5,
    transform: [{ rotate: "-30deg" }]
  }
});
module.exports = DetailsScreen;
