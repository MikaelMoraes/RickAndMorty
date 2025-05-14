// src/graphql/queries/episodes.ts
import gql from 'graphql-tag'

export const GET_EPISODES = gql`
  query GetEpisodes($episodeIds: [ID!]!) {
    episodesByIds(ids: $episodeIds) {
      id
      name
      episode
      air_date
    }
  }
`
