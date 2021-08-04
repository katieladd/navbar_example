import React, { useState } from 'react';

const Nav = () => {

  const [active, setActive] = useState('');

  const isActive = (e) => {
    active ? setActive(false) : setActive(true);
  }

  return (
    <>
      <div className="navigation-container">
        <ul className="navigation-tabs">
          <li id="logo"></li>
          <li className={`tab solutions-tab ${active==='solutions' ? 'current-tab': ''}`} onClick={ () => {setActive('solutions')} }>SOLUTIONS</li>
          <li className={`tab products-tab ${active==='products' ? 'current-tab': ''}`} onClick={ () => {setActive('products')} }>PRODUCTS</li>
          <li className={`tab resources-tab ${active==='resources' ? 'current-tab': ''}`} onClick={ () => {setActive('resources')} }>RESOURCES</li>
          <li className={`tab education-tab ${active==='education' ? 'current-tab': ''}`} onClick={ () => {setActive('education')} }>EDUCATION</li>
          <li className={`tab automation-tab ${active==='automation' ? 'current-tab': ''}`} onClick={ () => {setActive('automation')} }>AUTOMATION</li>
        </ul>
        <div className='search-container'>
        <span className='search'>Search</span>
        <span className='material-icons search'>search</span>
        </div>
      </div>
      <div className='navbar-dropdown'>
        {
        active==='solutions' &&
        <ul className='dropdown-options-container'>
          <li>Solutions By Industry</li>
          <li>Solutions By Process</li>
          <li>Software Solutions</li>
          <li>Services</li>
        </ul>
        }
      </div>
    </>
  )

}

export default Nav;