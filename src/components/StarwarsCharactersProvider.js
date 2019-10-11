
import {useState, useEffect} from 'react';
import axios from 'axios';

export const StarwarsCharactersProvider = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(
        () => {
            (async () => {
                const response = await axios.get (
                    "https://swapi.co/api/people"
                )
                setCharacters(response.data.results);
            })()
        },
        []
    )
    return characters;
}

export default StarwarsCharactersProvider;