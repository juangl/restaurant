import React from "react";
import { View, StyleSheet, TextInput, Animated } from "react-native";
import Touchable from "@appandflow/touchable";

import Logo from "../Logo";
import Icon from "../Icon";
import SearchBox from "../SearchBox";

const styles = StyleSheet.create({
  container: {
    paddingTop: 19,
    paddingRight: 14,
    paddingBottom: 18,
    paddingLeft: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

class NavBar extends React.Component {
  state = {
    isSearchBoxVisible: false,
  };

  animateToggle = () => {
    this.setState(({ isSearchBoxVisible }) => ({
      isSearchBoxVisible: !isSearchBoxVisible,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Logo />
          <Touchable feedback="opacity" onPress={this.animateToggle}>
            <Icon name="search" color="#000055" size={25} />
          </Touchable>
        </View>

        <SearchBox visible={this.state.isSearchBoxVisible} />
      </View>
    );
  }
}

export default NavBar;
