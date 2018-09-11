import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    return (
      <View style={styles.app__cards}>
        <View style={styles.app__cardLeft}>
          <View style={styles.app__cardLeftCircle}>
            <View style={styles.circleContainer}>
              <Text
                style={{
                  color: "#6C6C6C",
                  fontWeight: "bold",
                  fontSize: 60
                }}
              >
                {this.props.numberOfDays}
              </Text>
            </View>
          </View>
          <View style={styles.app__cardLeftText}>
            <Text
              style={{
                color: "#fff",
                paddingLeft: 10,
                fontSize: 15,
                paddingTop: 45
              }}
            >
              More days to go
            </Text>
          </View>
        </View>
        <View style={styles.app__cardRight}>
          <Text
            style={{
              color: "#FAFA32",
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 45
            }}
          >
            {this.props.name}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              paddingBottom: 20
            }}
          >
            Morning | Evening | Night
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app__cards: {
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
  app__cardRight: {
    flex: 2
  },
  app__cardLeft: {
    flex: 1,
    flexDirection: "column"
  },
  app__cardLeftText: {
    flex: 1,
    marginBottom: 15,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  app__cardLeftCircle: {
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
  }
});

Card.propTypes = {
  name: PropTypes.string,
  morning: PropTypes.bool,
  afternoon: PropTypes.bool,
  night: PropTypes.bool,
  numberOfDays: PropTypes.number
};

module.exports = Card;
