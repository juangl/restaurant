import React from "react";
import { StyleSheet, View, Animated, TextInput } from "react-native";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const styles = StyleSheet.create({
  textInputBox: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

class SearchBox extends React.Component {
  state = {
    shouldRenderNode: this.props.visible,
  };
  animatedOpen = new Animated.Value(0);
  animatedTextInputWidth = this.animatedOpen.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });
  animatedTextInputHeight = this.animatedOpen.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    if (prevProps.visible && !visible) {
      this.animateClose();
    }

    if (!prevProps.visible && visible) {
      this.animateOpen();
    }
  }

  animateOpen = () => {
    this.setState({ shouldRenderNode: true }, () => {
      Animated.timing(this.animatedOpen, {
        toValue: 1,
        duration: 100,
      }).start();
    });
  };

  animateClose = () => {
    Animated.timing(this.animatedOpen, {
      toValue: 0,
      duration: 100,
    }).start(() => {
      this.setState({ shouldRenderNode: false });
    });
  };

  getDynamicTextInputStyle = () => {
    return [
      styles.textInput,
      {
        width: this.animatedTextInputWidth,
        height: this.animatedTextInputHeight,
      },
    ];
  };

  render() {
    return (
      <View style={styles.textInputBox}>
        {this.state.shouldRenderNode && (
          <AnimatedTextInput
            autoFocus
            style={this.getDynamicTextInputStyle()}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            onSubmitEditing={this.props.onSubmitEditing}
          />
        )}
      </View>
    );
  }
}

export default SearchBox;
