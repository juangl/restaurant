import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemWrapper: {},
});

class ItemsContainer extends React.Component {
  getContentWrapperDynamicStyle = () => {
    return {
      width: this.props.containerWidth - this.props.insertOffset * 2,
    };
  };

  render() {
    const contentWrapperStyle = this.getContentWrapperDynamicStyle();
    return this.props.data.map((item, index) => {
      return (
        <View
          key={this.props.keyExtractor(item)}
          style={[styles.itemWrapper, contentWrapperStyle]}
        >
          {this.props.renderItem(item, index)}
        </View>
      );
    });
  }
}

export default ItemsContainer;
