// src/graphql/models/characterDetailsModel.ts

export interface CharacterDetailsData {
    character: {
        id: string
        name: string
        status: string
        species: string
        type: string
        gender: string
        image: string
        origin: {
            id: string
            name: string
        }
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
        episode: {
            id: string
            name: string
            episode: string
            air_date: string
        }[]
    }
}
