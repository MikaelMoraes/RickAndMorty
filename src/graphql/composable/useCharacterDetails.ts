// src/composables/useCharacterDetails.ts
import { ref, watch, type Ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_CHARACTER_DETAILS } from 'src/graphql/queries/characterDetails'
import type { CharacterDetailsData } from 'src/graphql/models/charactersDetailModel'

export function useCharacterDetails(characterId: Ref<string>) {
    const variables = ref({
        characterId: characterId.value
    })

    watch(characterId, () => {
        variables.value = {
            characterId: characterId.value
        }
    })

    const { result, loading, error } = useQuery<CharacterDetailsData>(GET_CHARACTER_DETAILS, variables)

    return {
        characterDetails: result,
        loading,
        error
    }
}
