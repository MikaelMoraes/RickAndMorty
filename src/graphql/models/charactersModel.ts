export interface Character {
    id: string
    name: string
    status: string
    image: string
}

export interface CharactersData {
    characters: {
        info: {
            count: number,
            next: number,
            pages: number
        }
        results: Character[]
    }
}
