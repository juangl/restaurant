import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import Touchable from "@appandflow/touchable";

import Icon from "../Icon";

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    paddingHorizontal: 17,
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#478AFF",
    fontSize: 16,
    marginLeft: 8,
    // use Gill-Sans on iOS or default font otherwise
    fontFamily: Platform.OS === "ios" ? "GillSans" : undefined,
  },
  alignRight: {
    marginLeft: "auto",
    flexDirection: "row",
  },
});

function ButtonContainer({ style, ...rest }) {
  return (
    <Touchable
      style={[styles.buttonContainer, style]}
      feedback="opacity"
      {...rest}
    />
  );
}

function FilterBar() {
  return (
    <View style={styles.container}>
      <ButtonContainer onPress={() => {}}>
        <Icon name="calendar" size={34} color="#121261" />
        <Text style={[styles.buttonText, { marginLeft: 5 }]}>Tomorrow</Text>
      </ButtonContainer>

      <View style={styles.alignRight}>
        <ButtonContainer onPress={() => {}} style={{ marginRight: 16 }}>
          <Icon name="people" size={24} color="#121261" />
          <Text style={[styles.buttonText, { marginLeft: 5 }]}>5</Text>
        </ButtonContainer>

        <ButtonContainer onPress={() => {}}>
          <Icon name="clock" size={24} color="#121261" />
          <Text style={styles.buttonText}>7pm</Text>
        </ButtonContainer>
      </View>
    </View>
  );
}

export default FilterBar;
