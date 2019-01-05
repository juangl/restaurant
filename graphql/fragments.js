import gql from 'graphql-tag';

export const ResponseStatusFields = gql`
  fragment ResponseStatusFields on ResponseStatus {
    status
    error
    error_code
  }
`

export const RestaurantReferenceFields = gql`
  fragment RestaurantReferenceFields on RestaurantReference {
    rest_url
    site
    url
    site_name
  }
`

export const RestaurantFields = gql`
  ${RestaurantReferenceFields}

  fragment RestaurantFields on Restaurant {
    type
    id
    address
    country
    description
    distance
    hours
    hours_source
    images
    ios_url
    lat
    lon
    opentable_id
    opentable_url
    open_closed
    phone
    rating
    references {
      ...RestaurantReferenceFields
    }
    region
    reviews
    street_address
    title
    url
    zip
  }
`