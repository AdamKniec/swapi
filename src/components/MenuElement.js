import React from 'react';
import StarwarsSpeciesProvider from './StarWarsSpeciesProvider';
const MenuElement = (props) => {
    return (
        <a href="2" className="list-group-item list-group-item-action ">
            <div className="d-flex w-100 justify-content-between">
                <h2 className="mb-1">{props.character.name}</h2>
            </div>
            <p>{props.character.birth_year}</p>
            <p>{StarwarsSpeciesProvider(props.character.species.toString())}</p>
        </a>
    )
}

export default MenuElement;