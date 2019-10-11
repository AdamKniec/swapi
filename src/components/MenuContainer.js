import React from 'react';
import MenuElement from './MenuElement'
// import StarWarsSpeciesProvider from './StarWarsSpeciesProvider';
// import StarwarsCharactersProvider from './StarwarsCharactersProvider';
const MenuContainer = (props) => {
    // console.log(StarwarsCharactersProvider())
    // console.log(StarWarsSpeciesProvider())
    return (
        
        <div className="col-4 list-group">
            {props.characters.map((item, i)=> {
                return <MenuElement character = {item} key={i}/>
            })}
        </div>
        
    )
}

export default MenuContainer;