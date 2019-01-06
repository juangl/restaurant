import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

import ItemsContainer from "./ItemsContainer";
import PanHandler from "./PanHandler";

function defaultExtractor(item) {
  return item.key;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

class Carousel extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    keyExtractor: PropTypes.func,
    insertOffset: PropTypes.number.isRequired,
  };

  static defaultProps = {
    keyExtractor: defaultExtractor,
  };

  state = {
    containerWidth: null,
  };

  measureContainer = ({ nativeEvent }) => {
    this.setState({
      containerWidth: nativeEvent.layout.width,
    });
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { paddingHorizontal: this.props.insertOffset },
        ]}
        onLayout={this.measureContainer}
      >
        {this.state.containerWidth ? (
          /* container width should be known */
          <PanHandler
            containerWidth={this.state.containerWidth}
            insertOffset={this.props.insertOffset}
            size={this.props.data.length}
          >
            {({ activeIndex }) => (
              <ItemsContainer
                data={this.props.data}
                containerWidth={this.state.containerWidth}
                insertOffset={this.props.insertOffset}
                keyExtractor={this.props.keyExtractor}
                renderItem={this.props.renderItem}
                activeIndex={activeIndex}
              />
            )}
          </PanHandler>
        ) : null}
      </View>
    );
  }
}

export default Carousel;
