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
    value: this.props.searchValue
  };

  animateToggle = () => {
    this.setState(({ isSearchBoxVisible }) => ({
      isSearchBoxVisible: !isSearchBoxVisible,
    }));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({
        value: this.props.searchValue,
      })
    }
  }

  onChangeText = (value) => {
    this.setState({
      value,
    })
  }

  onSubmitEditing = () => {
    this.props.onTextSearchChange(this.state.value);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Logo />
          <Touchable feedback="opacity" onPress={this.animateToggle}>
            <Icon name="search" color="#000055" size={25} />
          </Touchable>
        </View>

        <SearchBox
          visible={this.state.isSearchBoxVisible}
          value={this.state.value}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
        />
      </View>
    );
  }
}

export default NavBar;
