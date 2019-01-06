import React from "react";
import { View, StyleSheet, Text, Platform, Linking } from "react-native";
import Touchable from "@appandflow/touchable";

const FONT = Platform.OS === "ios" ? "GillSans" : undefined;

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 20,
  },

  ButtonText: {
    color: "#478AFF",
    fontFamily: FONT,
    fontSize: 16,
  }
});

function Button(props) {
  return (
    <Touchable feedback="opacity" onPress={props.onPress}>
      <Text style={styles.ButtonText}>{props.children}</Text>
    </Touchable>
  );
}

function BottomBar(props) {
  return <View style={styles.container}>

    <Button onPress={() => {
      Linking.openURL(`tel:${props.phone}`)
    }}>Call</Button>
    <Button>0.6 miles away</Button>
    <Button>Reverse</Button>
  </View>;
}

export default BottomBar;
