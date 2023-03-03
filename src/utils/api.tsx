import { Pokemon } from "../types";

type Response = {
    results: Pokemon[]
}

export const fetchPokemons = async (): Promise<Response> => {
    const fetched = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50', {method: 'GET'});
    return fetched.json()
}