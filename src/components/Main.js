import React,{useState} from 'react';
import NavigationBar from './NavigationBar';
import MenuContainer from './MenuContainer';
import ProfileView from './ProfileView';
import StarwarsCharactersProvider from './StarwarsCharactersProvider';
const Main = () => {
// console.log(StarwarsCharactersProvider());
    return (
        <div className="container">
            <div className="row">
                  <NavigationBar />
            </div>
          
            <div className="row">
                <MenuContainer characters = {StarwarsCharactersProvider()}/>
                <ProfileView />
            </div>
         
        </div>
    )
}
export default Main;