// src/composables/useLocation.ts
import { ref, watch, type Ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_LOCATION } from 'src/graphql/queries/locations'
import type { LocationData } from 'src/graphql/models/locationModel'

export function useLocation(locationId: Ref<string>) {
    const variables = ref({
        locationId: locationId.value
    })

    watch(locationId, () => {
        variables.value = {
            locationId: locationId.value
        }
    })

    const { result, loading, error } = useQuery<LocationData>(GET_LOCATION, variables)

    return {
        location: result,
        loading,
        error
    }
}
