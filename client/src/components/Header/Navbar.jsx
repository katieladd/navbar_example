import React, { useState } from 'react';

const Nav = () => {

  const [active, setActive] = useState('');

  const isActive = (e) => {
    active ? setActive(false) : setActive(true);
  }

  return (
    <>
      <div className='navigation-container'>
        <ul className='navigation-tabs'>
          <li id='logo'></li>
          <li className={`tab solutions-tab ${active==='solutions' ? 'current-tab': ''}`}
          onClick={ () => {active==='solutions' ? setActive('') : setActive('solutions')}}>
            SOLUTIONS
          </li>
          <li className={`tab products-tab ${active==='products' ? 'current-tab': ''}`}
          onClick={ () => {active==='products' ? setActive('') :setActive('products')}}>
            PRODUCTS
          </li>
          <li className={`tab resources-tab ${active==='resources' ? 'current-tab': ''}`}
          onClick={ () => {active==='resources' ? setActive('') :setActive('resources')}}>
            RESOURCES
          </li>
          <li className={`tab education-tab ${active==='education' ? 'current-tab': ''}`}
          onClick={ () => {active==='education' ? setActive('') :setActive('education')}}>
            EDUCATION
          </li>
          <li className={`tab automation-tab ${active==='automation' ? 'current-tab': ''}`}
          onClick={ () => {active==='automation' ? setActive('') :setActive('automation')}}>
            AUTOMATION
          </li>
        </ul>
        <div className='search-container'>
        <span className='search'>Search</span>
        <span className='material-icons search'>search</span>
        </div>
      </div>
      <div className='navbar-dropdown'>
        { active==='solutions' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option solutions-li1'>Solutions By Industry</li>
            <li className='dropdown-option solutions-li2'>Solutions By Process</li>
            <li className='dropdown-option solutions-li3'>Software Solutions</li>
            <li className='dropdown-option solutions-li4'>Services</li>
          </ul>
        }
        { active==='products' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option products-li1'>Series</li>
            <li className='dropdown-option products-li2'>Limited collections</li>
          </ul>
        }
        { active==='resources' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option resources-li1'>React</li>
            <li className='dropdown-option resources-li2'>Javascript</li>
            <li className='dropdown-option resources-li3'>CSS</li>
            <li className='dropdown-option resources-li4'>HTML</li>
          </ul>
        }
        { active==='education' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option resources-li1'>Hack Reactor 2021 July Graduate</li>
            <li className='dropdown-option resources-li1'>MVCC 2020 December AAS Computer Applications Programming</li>
          </ul>
        }
        { active==='automation' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option automation-li1'>Just automate hiring me, I swear I'm cool 😎</li>
          </ul>
        }
      </div>
    </>
  )

}

export default Nav;