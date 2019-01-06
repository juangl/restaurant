import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemWrapper: {},
});

const WINDOW_SIZE = 6;

class ItemsContainer extends React.Component {
  getContentWrapperDynamicStyle = () => {
    return {
      width: this.props.containerWidth - this.props.insertOffset * 2,
    };
  };

  isIndexWithinWindow = index => {
    const endIndex = this.props.data.length - 1;
    const window_2 = WINDOW_SIZE / 2;
    const windowStartIndex = Math.max(this.props.activeIndex - window_2, 0);
    const windowEndIndex = Math.min(
      this.props.activeIndex + window_2,
      endIndex,
    );

    if (index >= windowStartIndex && index <= windowEndIndex) return true;

    return false;
  };

  render() {
    const contentWrapperStyle = this.getContentWrapperDynamicStyle();
    return this.props.data.map((item, index) => {
      let content = null;
      if (this.isIndexWithinWindow(index)) {
        content = this.props.renderItem(item, index);
        console.log("index render", index)
      }

      return (
        <View
          key={this.props.keyExtractor(item)}
          style={[styles.itemWrapper, contentWrapperStyle]}
        >
          {content}
        </View>
      );
    });
  }
}

export default ItemsContainer;
