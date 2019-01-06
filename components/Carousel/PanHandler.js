import React from "react";
import { Animated, StyleSheet } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  swiableContainer: {
    flexDirection: "row",
  },
});

class PanHandler extends React.Component {
  state = { activeIndex: 0 };
  xOffset = 0;
  dragX = new Animated.Value(0);
  animatedXOffset = new Animated.Value(0);
  animatedTranslateX = Animated.add(this.dragX, this.animatedXOffset);
  onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: this.dragX } }],
    { useNativeDriver: true },
  );

  onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX, velocityX } = event.nativeEvent;

      const currentXOffset = this.xOffset + translationX;
      const xOffsetWithInertia = currentXOffset + velocityX * 0.15;
      const CAR_WIDTH = this.props.containerWidth - this.props.insertOffset * 2;

      const closestSnap =
        Math.round(xOffsetWithInertia / CAR_WIDTH) * CAR_WIDTH;
      const lastSnap = (this.props.size - 1) * CAR_WIDTH * -1;

      const lastXOffset = this.xOffset;
      this.xOffset = Math.max(closestSnap, lastSnap);
      this.xOffset = Math.min(0, this.xOffset);

      this.animatedXOffset.setValue(lastXOffset + translationX);
      this.dragX.setValue(0);

      Animated.spring(this.animatedXOffset, {
        velocity: velocityX,
        bounciness: 0,
        toValue: this.xOffset,
        useNativeDriver: true,
      }).start(() => {
        this.setState({
          activeIndex: Math.abs(this.xOffset / CAR_WIDTH),
        });
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
            { transform: [{ translateX: this.animatedTranslateX }] },
          ]}
        >
          {this.props.children({ activeIndex: this.state.activeIndex })}
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

export default PanHandler;
