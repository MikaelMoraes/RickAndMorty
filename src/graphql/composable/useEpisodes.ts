// src/composables/useEpisodes.ts
import { ref, watch, type Ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_EPISODES } from 'src/graphql/queries/episodes'
import type { EpisodesData } from 'src/graphql/models/episodesModel'
export function useEpisodes(episodeIds: Ref<string[]>) {
    const variables = ref({
        episodeIds: episodeIds.value
    })

    watch(episodeIds, () => {
        variables.value = {
            episodeIds: episodeIds.value
        }
    })

    const { result, loading, error } = useQuery<EpisodesData>(GET_EPISODES, variables)

    return {
        episodes: result,
        loading,
        error
    }
}
