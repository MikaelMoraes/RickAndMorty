// src/graphql/queries/locations.ts
import gql from 'graphql-tag'

export const GET_LOCATION = gql`
  query GetLocation($locationId: ID!) {
    location(id: $locationId) {
      id
      name
      type
      dimension
      residents {
        id
        name
      }
    }
  }
`
