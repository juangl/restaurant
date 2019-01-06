import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import Icon from "../Icon";

const FONT = Platform.OS === "ios" ? "GillSans" : undefined;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 45,
    paddingHorizontal: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  textGroup: {
    fontFamily: FONT,
    color: "#121261",
  },

  distanceBigText: {
    fontSize: 18,
  },

  distanceSmallText: {
    fontSize: 11,
  },
});

function InfoBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="walking" color="#478AFF" size={22} />
        <Text style={[styles.textGroup, { marginLeft: 10 }]}>
          <Text style={styles.distanceBigText}>6</Text>
          <Text style={styles.distanceSmallText}>min</Text>
        </Text> 
      </View>

      <View style={styles.iconContainer}>
        <Icon name="dollar" color="#478AFF" size={20} />
        <Text style={[styles.textGroup, { marginLeft: 5 }]}>
          <Text style={styles.distanceBigText}>10-15</Text>
        </Text>
      </View>

      <View style={styles.iconContainer}>
        <Icon name="star" color="#478AFF" size={20} />
        <Text style={[styles.textGroup, { marginLeft: 5 }]}>
          <Text style={styles.distanceBigText}>{props.rating}</Text>
          <Text style={styles.distanceSmallText}>/5</Text>
        </Text>
      </View>

      <View style={styles.iconContainer}>
        <Icon name="hart" color="#478AFF" size={18} />
        <Text style={[styles.textGroup, { marginLeft: 5 }]}>
          <Text style={styles.distanceBigText}>12</Text>
        </Text>
      </View>
    </View>
  );
}

export default InfoBar;
