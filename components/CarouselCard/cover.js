import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Platform,
} from "react-native";
import { LinearGradient } from "expo";
import Icon from "../Icon";

const FONT = Platform.OS === "ios" ? "GillSans" : undefined;

const styles = StyleSheet.create({
  topGradient: {
    opacity: 0.73,
    position: "absolute",
    height: 172,
    left: 0,
    right: 0,
    top: 0,
  },

  bottomGradient: {
    opacity: 0.67,
    position: "absolute",
    height: 131,
    left: 0,
    right: 0,
    bottom: 0,
  },

  directionText: {
    fontSize: 18,
    fontFamily: FONT,
    color: "#fff",
  },

  textContainer: {
    paddingHorizontal: 18,
    paddingTop: 26,
    paddingBottom: 12,
  },

  iconTextGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  circleIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },

  bottomInfoContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
  },
});

function Cover(props) {
  return (
    <ImageBackground
      source={{ uri: props.image }}
      style={{ width: "100%", height: 415 }}
      imageStyle={{ resizeMode: "cover" }}
    >
      <LinearGradient
        colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
        style={styles.topGradient}
      >
        <View style={styles.textContainer}>
          <View style={styles.iconTextGroup}>
            <Icon name="location" color="#fff" size={18} />
            <Text style={[{ marginLeft: 8 }, styles.directionText]}>
              {props.address}
            </Text>
          </View>

          <Text style={[{}, styles.directionText]}>Closes at 10:00pm</Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
        style={styles.bottomGradient}
      >
        <View style={[styles.bottomInfoContainer, styles.textContainer]}>
          <View style={styles.iconTextGroup}>
            <View style={styles.circleIcon} />
            <Text style={[{ marginLeft: 10 }, styles.directionText]}>
              Not Busy
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Icon name="star" color="#fff" size={15} />
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={styles.directionText}>
                Featured in NY Magazine, Zagat, and 2 others.
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

export default Cover;
