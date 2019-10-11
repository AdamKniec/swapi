import React from 'react';
// import {StarwarsCharactersProvider} from './StarwarsCharactersProvider';
const NavigationBar = () => {
  // console.log(StarwarsCharactersProvider())
    return (
        <nav className="navbar navbar-light bg-light container">
        <a className="navbar-brand" href="/">Navbar</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <input type="submit" value="Search" className="btn btn-outline-success my-2 my-sm-0"/>
        </form>
      </nav>
    )
}

export default NavigationBar;