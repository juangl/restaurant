import React from "react";
import { View, StyleSheet } from "react-native";
import Touchable from "@appandflow/touchable";

import Logo from "../Logo";
import Icon from "../Icon";

const styles = StyleSheet.create({
  container: {
    paddingTop: 19,
    paddingRight: 14,
    paddingBottom: 18,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Touchable feedback="opacity" onPress={() => {}}>
          <Icon name="search" color="#000055" size={25} />
        </Touchable>
      </View>
    );
  }
}

export default NavBar;
