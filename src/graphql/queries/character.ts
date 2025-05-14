// src/graphql/queries/characters.ts
import gql from 'graphql-tag'

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $nameFilter: String) {
    characters(page: $page, filter: { name: $nameFilter }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        image
      }
    }
  }
`
