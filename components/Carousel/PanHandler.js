import React from "react";
import { Animated, StyleSheet } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  swiableContainer: {
    flexDirection: "row",
  },
});

class PanHandler extends React.Component {
  xOffset = 0;
  dragX = new Animated.Value(0);
  onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: this.dragX } }],
    { useNativeDriver: false },
  );

  onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX, velocityX } = event.nativeEvent;

      const currentXOffset = this.xOffset + translationX
      const xOffsetWithInertia = currentXOffset + velocityX * 0.15;
      const CAR_WIDTH = this.props.containerWidth - this.props.insertOffset * 2;

      const closestSnap = Math.round(xOffsetWithInertia / CAR_WIDTH) * CAR_WIDTH;
      const lastSnap = (this.props.size - 1) * CAR_WIDTH * -1;

      const lastXOffset = this.xOffset;
      this.xOffset = Math.max(closestSnap, lastSnap);
      this.xOffset = Math.min(0, this.xOffset);

      const diff = this.xOffset - lastXOffset;

      this.dragX.setOffset(lastXOffset);
      Animated.spring(this.dragX, {
        velocity: velocityX,
        bounciness: 0,
        toValue: diff,
        useNativeDriver: false,
      }).start(() => {
        this.dragX.setOffset(this.xOffset);
        this.dragX.setValue(0);
      });
    }
  };

  render() {
    return (
      <PanGestureHandler
        {...this.props}
        maxPointers={1}
        onGestureEvent={this.onGestureEvent}
        onHandlerStateChange={this.onHandlerStateChange}
      >
        <Animated.View
          style={[
            styles.swiableContainer,
            { transform: [{ translateX: this.dragX }] },
          ]}
        >
          {this.props.children}
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

export default PanHandler;
