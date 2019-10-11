
import {useState, useEffect} from 'react';
import axios from 'axios';

export const StarwarsSpeciesProvider = (specie) => {
    console.log(specie)
    const [species, setSpecies] = useState([]);
    // console.log(specie)
    useEffect(
        () => {
            (async (specie) => {
                const response = await axios.get (
                    // `${specie}`
                    "https://swapi.co/api/species/2"
                )
                setSpecies(response.data.name);
                console.log(specie)
            })()
        },
        []
    )
    return species;
}

export default StarwarsSpeciesProvider;

