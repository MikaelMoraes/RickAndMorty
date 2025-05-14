// src/composables/useCharacters.ts
import { ref, watch, type Ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_CHARACTERS } from 'src/graphql/queries/character'
import type { CharactersData } from 'src/graphql/models/charactersModel'


export function useCharacters(page: Ref<number>, nameFilter: Ref<string>) {
  const variables = ref({
    page: page.value,
    nameFilter: nameFilter.value
  })
  const total = ref(0)

  watch([page, nameFilter], () => {
    variables.value = {
      page: page.value,
      nameFilter: nameFilter.value
    }
  })

  const { result, loading, error } = useQuery<CharactersData>(GET_CHARACTERS, variables)

  watch(result, (newResult) => {
    if (newResult?.characters?.info?.pages) {
      total.value = newResult.characters.info.pages
    }
  })
  return {
    characters: result,
    totalPages: total,
    loading,
    error
  }
}
