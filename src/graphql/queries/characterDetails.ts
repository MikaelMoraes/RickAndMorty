// src/graphql/queries/characterDetails.ts
import gql from 'graphql-tag'

export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
      }
      location {
        id
        name
        type
        dimension
        residents {
          id
          name
        }
      }
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`
