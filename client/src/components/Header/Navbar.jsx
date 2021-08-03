import React from 'react';
import Solutions from '../Solutions.jsx';
import Products from '../Products.jsx';
import Automation from '../Automation.jsx';
import Education from '../Education.jsx';
import Resources from '../Resources.jsx';

const Nav = () => {
  return (
    <div className="navigation-container">
      <ul className="navigation-tabs">
        <div id="logo"></div>
        <Solutions />
        <Products />
        <Automation />
        <Education />
        <Resources />
      </ul>
      <div className='search-container'>
      <span className='search'>Search</span>
      <span className='material-icons search'>search</span>
      </div>
    </div>
  )

}

export default Nav;