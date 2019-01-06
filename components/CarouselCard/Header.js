import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Icon from "../Icon";

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    backgroundColor: "#478AFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    paddingLeft: 18,
    paddingRight: 8,
  },
  titleText: {
    color: "#fff",
    fontSize: 18,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    paddingRight: 5,
  },
});

function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText} numberOfLines={1}>{props.title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="pin" color="#478AFF" size={18} />
      </View>
    </View>
  );
}

export default Header;
