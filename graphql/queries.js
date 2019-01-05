import gql from 'graphql-tag';

import * as FRAGMENTS from './fragments';

export const RESTAURANT_SEARCH_QUERY = gql`
${FRAGMENTS.ResponseStatusFields}
${FRAGMENTS.RestaurantFields}

query search_restaurants($address: String!) {
  search_restaurants(address: $address) {
    response_status {
      ...ResponseStatusFields
    }
    total_results
    results {
      ...RestaurantFields
    }
  }
}

`;