import React from 'react';
import NavigationBar from './NavigationBar';
import MenuContainer from './MenuContainer';
import ProfileView from './ProfileView';

const Main = () => {
    return (
        <div className="container">
            <div className="row">
                  <NavigationBar />
            </div>
          
            <div className="row">
                <MenuContainer />
                <ProfileView />
            </div>
         
        </div>
    )
}
export default Main;