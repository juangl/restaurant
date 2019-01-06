import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const FONT = Platform.OS === "ios" ? "GillSans" : undefined;

const styles = StyleSheet.create({
  text: {
    color: "#6B6BB2",
    fontSize: 16,
    textAlign: "center",
    fontFamily: FONT,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});

function Description(props) {
  return <Text style={styles.text}>{props.description}</Text>;
}

export default Description;
