import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "./Header";
import InfoBar from "./InfoBar";
import Cover from "./cover";
import BottomBar from "./BottomBar";

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
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

class CarouselCard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.shadowContainer}>
          <Header title={data.title} />
          <InfoBar rating={data.rating} />
          <Cover image={data.images[0]} address={data.address}/>
          <BottomBar phone={data.phone} />
        </View>
      </View>
    );
  }
}

export default CarouselCard;
