import React from "react";
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
  Text,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

class NotifyCards extends React.Component {
  onCardPress(id) {
    console.log("toast");
    console.log(this.props.id);
    ToastAndroid.show("Swipe hey", ToastAndroid.SHORT);
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.onCardPress(this.props.id);
          }}
        >
          <View style={styles.app__cards}>
            <View style={{ paddingLeft: 20, flex: 1.5 }}>
              <Text
                style={{
                  fontFamily: "FontAwesomeBold",
                  fontSize: 60,
                  color: "#6C6C6C"
                }}
              >
                &#xf46b;
              </Text>
            </View>
            <View style={{ flex: 4 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 10,
                  marginBottom: 10,
                  fontSize: 28
                }}
              >
                {this.props.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app__cards: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 0,
    maxHeight: 120,
    borderRadius: 25,
    elevation: 6
  }
});

NotifyCards.propTypes = {
  name: PropTypes.string,
  morning: PropTypes.bool,
  afternoon: PropTypes.bool,
  night: PropTypes.bool,
  id: PropTypes.string,
  date: PropTypes.number
};

module.exports = NotifyCards;
