import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  SafeAreaView,
} from 'react-native';

import { Query } from 'react-apollo';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';

export default class Restaurants extends React.Component {
  state = {
  };

  render() {
    // TODO: This shouldn't be hard coded.  Allow the user to enter it into a Text Input
    const address = '1260 6th Ave, New York, NY 10020';

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Query
          query={RESTAURANT_SEARCH_QUERY}
          variables={{
            address
          }}
        >
          {({ loading, error, data = {} }) => {
            if (loading) {
              return (
                <View style={{ width: '100%', paddingVertical: 10 }}>
                  <ActivityIndicator size="large" style={{ padding: 30 }} />
                </View>
              );
            }

            console.log('DO SOMETHING SMART WITH THIS DATA');
            //console.log('data', data);
            //console.log('error', error);

            // Make sure we have data
            if (data.search_restaurants && data.search_restaurants.results && data.search_restaurants.results.length > 0) {
              return (
                <View style={{ width: '100%', paddingVertical: 10 }}>
                  <Text>Num Restaurants: {data.search_restaurants.results.length}</Text>
                  <Text>----</Text>
                  {data.search_restaurants.results.map((r) => {
                    return (
                      <Text key={r.id}>{r.title}</Text>
                    );
                  })}
                </View>
              );
            }

            // No Data Return
            return (
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text>No Results</Text>
              </View>
            );
          }}
        </Query>
      </SafeAreaView>
    );
  }
}

const styles = {
};

