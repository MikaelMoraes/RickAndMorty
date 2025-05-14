export interface LocationData {
    location: {
        id: string
        name: string
        type: string
        dimension: string
        residents: {
            id: string
            name: string
        }[]
    }
}
