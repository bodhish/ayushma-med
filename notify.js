import React from "react";
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  Text,
  Image,
  BackHandler,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import GestureRecognizer from "react-native-swipe-gestures";
import {
  PlaySound,
  StopSound,
  PlaySoundRepeat,
  PlaySoundMusicVolume
} from "react-native-play-sound";

class Notify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      morning: false,
      afternoon: false,
      night: false
    };
  }
  componentDidMount = () => {
    PlaySoundRepeat("bells");
    // this.getData();
  };

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
    StopSound();
    BackHandler.exitApp();
    return true;
  }

  getData() {
    AsyncStorage.getItem(this.props.alarmID.substr(0, 9), (err, result) => {
      if (result) {
        var data = JSON.parse(result);
        this.setState({
          name: data.name,
          morning: data.morning,
          afternoon: data.afternoon,
          night: data.night
        });
      }
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#16CB93"
        }}
      >
        <View style={styles.app__notifyHeader}>
          <Text
            style={{
              color: "#fff",
              paddingLeft: 10,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
              fontSize: 28
            }}
          >
            REMINDER
          </Text>
        </View>
        <View style={styles.app__notify}>
          <View>
            <Image
              source={require("./res/logo.png")}
              style={{ width: 150, height: 150 }}
            />
            <Text>Reminder Name :{this.state.name}</Text>
            <Text>Morning: {this.state.morning ? "True" : "False"}</Text>
            <Text>Afternoon: {this.state.afternoon ? "True" : "False"}</Text>
            <Text>Night: {this.state.night ? "True" : "False"}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.app__notifyCloseButton}
          onPress={this.handleBackButtonClick.bind(this)}
        >
          <View>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                fontSize: 18
              }}
            >
              CLOSE REMINDER
            </Text>
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
  app__notifyHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16CB93"
  },
  app__notify: {
    flex: 5,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",

    borderColor: "#fff",
    borderWidth: 0,
    borderRadius: 20
  },
  app__notifyCloseButton: {
    flex: 1,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#fff",

    borderColor: "#fff",
    borderWidth: 0,
    borderRadius: 20
  }
});

module.exports = Notify;
