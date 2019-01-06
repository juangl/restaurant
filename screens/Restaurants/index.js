import React from "react";
import { View, ActivityIndicator, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo";

import { Query } from "react-apollo";
import { RESTAURANT_SEARCH_QUERY } from "../../graphql/queries";
import NavBar from "../../components/NavBar";
import FilterBar from "../../components/FilterBar";
import Carousel from "../../components/Carousel";

const COLORS = ["#0f0", "#00f", "#f0f", "#ff0", "#0ff"];

export default class Restaurants extends React.Component {
  state = {};

  render() {
    // TODO: This shouldn't be hard coded.  Allow the user to enter it into a Text Input
    const address = "1260 6th Ave, New York, NY 10020";

    return (
      <LinearGradient colors={["#E8F0FA", "#FFF"]} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavBar />
          <FilterBar />

          <Carousel
            insertOffset={16}
            data={[{ key: 0 }, { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }]}
            renderItem={data => {
              return (
                <View
                  style={{
                    backgroundColor: COLORS[data.key],
                    height: 300,
                    width: "100%",
                  }}
                />
              );
            }}
          />
          {/*<Query
            query={RESTAURANT_SEARCH_QUERY}
            variables={{
              address,
            }}
          >
            {({ loading, error, data = {} }) => {
              if (loading) {
                return (
                  <View style={{ width: "100%", paddingVertical: 10 }}>
                    <ActivityIndicator size="large" style={{ padding: 30 }} />
                  </View>
                );
              }

              console.log("DO SOMETHING SMART WITH THIS DATA");
              //console.log('data', data);
              //console.log('error', error);

              // Make sure we have data
              if (
                data.search_restaurants &&
                data.search_restaurants.results &&
                data.search_restaurants.results.length > 0
              ) {
                return (
                  <View style={{ flex: 1, width: "100%", paddingVertical: 10 }}>
                    <Text>
                      Num Restaurants: {data.search_restaurants.results.length}
                    </Text>
                    <Text>----</Text>
                    {data.search_restaurants.results.map(r => {
                      return <Text key={r.id}>{r.title}</Text>;
                    })}
                  </View>
                );
              }

              // No Data Return
              return (
                <View style={{ width: "100%", paddingVertical: 10 }}>
                  <Text>No Results</Text>
                </View>
              );
            }}
          </Query>*/}
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
