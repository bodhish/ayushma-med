import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  ToastAndroid,
  Picker,
  TextInput,
  AsyncStorage,
  StyleSheet
} from "react-native";
import AndroidAlarms from "react-native-android-alarms";

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      morning: false,
      afternoon: false,
      night: false,
      numberOfDays: 0,
      id: 1,
      morning_time: "08:00",
      afternoon_time: "12:00",
      night_time: "20:00"
    };
  }

  componentDidMount = () => {
    AsyncStorage.getAllKeys((err, keys) => {
      const newId = this.generateID();
      console.log("new" + newId);
      keys.includes(newId)
        ? this.setState({ id: this.generateID() })
        : this.setState({ id: newId });
      console.log(this.state.id);
    });

    AsyncStorage.getItem("settings", (err, result) => {
      if (result) {
        var data = JSON.parse(result);
        this.setState({
          morning_time: data.morning_time,
          afternoon_time: data.afternoon_time,
          night_time: data.night_time
        });
      }
    });
  };

  generateID() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  }

  morning(value) {
    value.setHours(
      this.state.morning_time.substr(0, 2),
      this.state.morning_time.substr(3, 5),
      0,
      0
    );
    return value;
  }
  afternoon(value) {
    value.setHours(
      this.state.afternoon_time.substr(0, 2),
      this.state.afternoon_time.substr(3, 5),
      0,
      0
    );
    return value;
  }
  night(value) {
    value.setHours(
      this.state.night_time.substr(0, 2),
      this.state.night_time.substr(3, 5),
      0,
      0
    );
    return value;
  }

  setMorningAlarm(newDate, i) {
    this.morning(newDate);
    AndroidAlarms.setAlarm(this.state.id + "_m" + i, newDate.valueOf(), false);
    console.log("Morning" + newDate + "    " + i);
  }
  setAfternoonAlarm(newDate, i) {
    this.afternoon(newDate);
    AndroidAlarms.setAlarm(this.state.id + "_a" + i, newDate.valueOf(), false);
    console.log("Afternoon" + newDate);
  }
  setNightAlarm(newDate, i) {
    this.night(newDate);
    AndroidAlarms.setAlarm(this.state.id + "_n" + i, newDate.valueOf(), false);
    console.log("Night" + newDate);
  }

  saveData() {
    ToastAndroid.show("We will remind you :)", ToastAndroid.SHORT);
    var newDate = new Date();
    newDate.setDate(newDate.getDate() + parseInt(this.state.numberOfDays));

    let reminder = {
      name: this.state.name,
      morning: this.state.morning,
      afternoon: this.state.afternoon,
      night: this.state.night,
      date: newDate.valueOf()
    };

    AsyncStorage.setItem(this.state.id, JSON.stringify(reminder), () => {
      AsyncStorage.getItem(this.state.id, (err, result) => {
        console.log("add" + result);
      });
    });
    this.props.navigation.state.params.getData();
    this.setAlarm();
  }

  setAlarm() {
    console.log("alarms");
    var today = new Date();

    const currentTIme = today.getHours();
    console.log("time : " + currentTIme);
    if (currentTIme <= parseInt(this.state.morning_time.substr(0, 2))) {
      if (this.state.morning) {
        this.setMorningAlarm(today, 0);
      }
      if (this.state.afternoon) {
        this.setAfternoonAlarm(today, 0);
      }
      if (this.state.night) {
        this.setNightAlarm(today, 0);
      }
    } else if (
      currentTIme <= parseInt(this.state.afternoon_time.substr(0, 2))
    ) {
      if (this.state.afternoon) {
        this.setAfternoonAlarm(today, 0);
      }
      if (this.state.night) {
        this.setNightAlarm(today, 0);
      }
      today.setDate(today.getDate() + parseInt(this.state.numberOfDays));
      if (this.state.morning) {
        this.setMorningAlarm(today, parseInt(this.state.numberOfDays));
      }
    } else if (currentTIme <= parseInt(this.state.night_time.substr(0, 2))) {
      if (this.state.night) {
        this.setNightAlarm(today, 0);
      }
      today.setDate(today.getDate() + parseInt(this.state.numberOfDays));
      if (this.state.morning) {
        this.setMorningAlarm(today, parseInt(this.state.numberOfDays));
      }
      if (this.state.afternoon) {
        this.setAfternoonAlarm(today, parseInt(this.state.numberOfDays));
      }
    } else {
      today.setDate(today.getDate() + parseInt(this.state.numberOfDays));
      if (this.state.morning) {
        this.setMorningAlarm(today, parseInt(this.state.numberOfDays));
      }
      if (this.state.afternoon) {
        this.setAfternoonAlarm(today, parseInt(this.state.numberOfDays));
      }
      if (this.state.night) {
        this.setNightAlarm(today, parseInt(this.state.numberOfDays));
      }
    }

    for (i = 1; i < parseInt(this.state.numberOfDays); i++) {
      var newDate = new Date();
      newDate.setDate(newDate.getDate() + i);
      if (this.state.morning) {
        this.setMorningAlarm(newDate, i);
      }
      if (this.state.afternoon) {
        this.setAfternoonAlarm(newDate, i);
      }
      if (this.state.night) {
        this.setNightAlarm(newDate, i);
      }
    }

    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.addReminder__root}>
          <View
            style={{ flex: 9, alignItems: "center", justifyContent: "center" }}
          >
            <View style={styles.addReminder__cards}>
              <View style={styles.addReminder__cardLeft}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    color: "#16CB93",
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
                        &#xf185;
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
                        &#xf111;
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
                        &#xf186;
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.addReminder__cardRight}>
                <View style={styles.addReminder__cardRightCircle}>
                  <TouchableOpacity style={styles.addReminder__circleContainer}>
                    <Text
                      style={{
                        color: "#6C6C6C",
                        fontWeight: "bold",
                        fontSize: 60
                      }}
                    >
                      {this.state.numberOfDays}
                    </Text>
                    <Picker
                      style={{
                        position: "absolute",
                        width: 1000,
                        height: 1000
                      }}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({
                          numberOfDays: itemValue
                        })
                      }
                    >
                      <Picker.Item
                        label="Select Number of Days"
                        value={this.state.numberOfDays}
                      />
                      <Picker.Item label="1 day" value="1" />
                      <Picker.Item label="2 days" value="2" />
                      <Picker.Item label="3 days" value="3" />
                      <Picker.Item label="4 days" value="4" />
                      <Picker.Item label="5 days" value="5" />
                      <Picker.Item label="6 days" value="6" />
                      <Picker.Item label="1 week" value="7" />
                    </Picker>
                  </TouchableOpacity>
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

          <TouchableOpacity
            onPress={this.saveData.bind(this)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#16CB93",
              maxHeight: 50,
              flex: 1
            }}
          >
            <Text
              style={{
                color: "#fff",
                paddingLeft: 10,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                fontSize: 18
              }}
            >
              ADD REMINDER
            </Text>
          </TouchableOpacity>
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
    backgroundColor: "#fff",
    maxHeight: 200,
    borderColor: "#fff",
    borderWidth: 0
  },
  addReminder__cardLeft: {
    backgroundColor: "#fff",
    flex: 2,
    paddingBottom: 20
  },
  addReminder__cardRight: {
    borderRadius: 20,
    flex: 1,
    backgroundColor: "#16CB93",
    borderRadius: 20,
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
  addReminder__circleContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 90,
    height: 90,
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
    fontFamily: "FontAwesome",
    fontSize: 40,
    color: "#6C6C6C",
    paddingBottom: 10
  },
  addReminder__morningTrue: {
    fontSize: 40,
    fontFamily: "FontAwesome",
    color: "#108D23",
    paddingBottom: 10
  },
  addReminder__afternoon: {
    fontFamily: "FontAwesome",
    fontSize: 40,
    color: "#6C6C6C",
    paddingBottom: 10
  },
  addReminder__afternoonTrue: {
    fontFamily: "FontAwesome",
    fontSize: 40,
    color: "#108D23",
    paddingBottom: 10
  },
  addReminder__night: {
    fontFamily: "FontAwesome",
    fontSize: 40,
    color: "#6C6C6C",
    paddingBottom: 10
  },
  addReminder__nightTrue: {
    fontFamily: "FontAwesome",
    fontSize: 40,
    color: "#108D23",
    paddingBottom: 10
  }
});
module.exports = DetailsScreen;
