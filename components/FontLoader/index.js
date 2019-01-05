import React from "react";
import { AppLoading, Font } from "expo";

class FontLoader extends React.Component {
  state = {
    isReady: false,
  };

  loadFont = async () => {
    await Font.loadAsync({
      icomoon: require("../../assets/fonts/icomoon.ttf"),
    })
  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadFont}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return this.props.children;
  }
}

export default FontLoader;
