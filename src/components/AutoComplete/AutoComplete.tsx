import { useCallback, useState } from "react";
import { Pokemon } from "../../types";
import { fetchPokemons } from "../../utils/api";
import { getHighlightedText } from "../../utils/helpers";
import "./AutoComplete.css";

export default function AutoComplete(): JSX.Element {
    const [data, setData] = useState<Pokemon[]>([]);
    const [fetchedData, setFetchedData] = useState<Pokemon[]>([]);
    const [searched, setSearch] = useState('');
    const [inputValue, setInputValue] = useState('');

    const fetchPokemon = async (searchWord: string): Promise<void> => {
        try {
            const pokemons = await fetchPokemons();
            setFetchedData(pokemons.results);
            const newData = fetchedData.filter((pokemon) => pokemon.name.toLowerCase().startsWith(searchWord));
            setData(newData);
        } catch (error) {
            console.error(error);
        }
    };

	const onChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
        if(!event.currentTarget.value){
            setData([]);
            return;
        }
        const searchWord = event.currentTarget.value.toLowerCase();
        setSearch(searchWord);

        if(fetchedData.length < 1){
            fetchPokemon(searchWord);
            return;
        }
        const newData = fetchedData.filter((pokemon) => pokemon.name.toLowerCase().startsWith(searchWord));
        setData(newData);
	}, [fetchedData]);

    const onClick = useCallback((name: string) => {
        setData([])
        setSearch(name);
        setInputValue(name)
    },[])

	return (
		<div className="main">
			Start typing...
			<input id="input-autocomplete" onChange={onChange} className="input" value={inputValue} />
            {data.length > 0 &&
                <ul className="pokemon-list-ul">
				{data.map((pokemon) => {
					return <li key={pokemon.name} onClick={() => onClick(pokemon.name)}>{getHighlightedText(pokemon.name, searched)}</li>;
				})}
			</ul>
            }
		</div>
	);
}
