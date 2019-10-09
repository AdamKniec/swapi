import React from 'react';
import NavigationBar from './NavigationBar';
import MenuContainer from './MenuContainer';
import ProfileView from './ProfileView';

const Main = () => {
    return (
        <div className="main">
            <p>Main</p>
            <NavigationBar />
            <MenuContainer />
            <ProfileView />
        </div>
    )
}
export default Main;