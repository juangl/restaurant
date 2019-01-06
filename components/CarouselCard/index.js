import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "./Header";
import InfoBar from "./InfoBar";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    width: "100%",
  },
  header: {
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    backgroundColor: "#478AFF",
  },
  titleText: {
    color: "#fff",
  },

  shadowContainer: {
    shadowColor: "#000",
    shadowOpacity: .5,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  }
});
const COLORS = ["#0f0", "#00f", "#f0f", "#ff0", "#0ff"];

class CarouselCard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.shadowContainer}>
          <Header title={data.title} />
          <InfoBar rating={data.rating} />
          <View
            style={{
              backgroundColor: COLORS[Math.floor(Math.random() * 4)],
              height: 300,
            }}
          />
        </View>
      </View>
    );
  }
}

export default CarouselCard;