import React from 'react';

const NavigationBar = () => {
    return (
        <nav class="navbar navbar-light bg-light container">
        <a class="navbar-brand" href="/">Navbar</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          <input type="submit" value="Search" class="btn btn-outline-success my-2 my-sm-0"/>
        </form>
      </nav>
    )
}

export default NavigationBar;