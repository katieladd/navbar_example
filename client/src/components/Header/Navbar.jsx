import React, { useState } from 'react';

const Nav = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState('');

  return (
    <>
      <nav className='navigation-container'>
        <li className='material-icons ham-icon'
          onClick={() => { toggle === 'ham-toggle' ? setToggle('') : setToggle('ham-toggle') }}>
          menu
        </li>
        <ul className={`navigation-tabs`}>
          <li id='logo'></li>
          <li className={`${toggle} menu-header`}>
            <p className='menu'>Menu</p>
            <span class='material-icons'>
              close
            </span>
          </li>
          <li className={`${toggle} tab solutions-tab  ${active === 'solutions' ? 'current-tab' : ''}`}
            onClick={() => { active === 'solutions' ? setActive('') : setActive('solutions') }}>
            SOLUTIONS
            <span class='material-icons chevron'>
              chevron_right
            </span>
          </li>
          <li className={`${toggle} tab products-tab  ${active === 'products' ? 'current-tab' : ''}`}
            onClick={() => { active === 'products' ? setActive('') : setActive('products') }}>
            PRODUCTS
            <span class='material-icons chevron'>
              chevron_right
            </span>
          </li>
          <li className={`${toggle} tab resources-tab  ${active === 'resources' ? 'current-tab' : ''}`}
            onClick={() => { active === 'resources' ? setActive('') : setActive('resources') }}>
            RESOURCES
            <span class='material-icons chevron'>
              chevron_right
            </span>
          </li>
          <li className={`${toggle} tab education-tab  ${active === 'education' ? 'current-tab' : ''}`}
            onClick={() => { active === 'education' ? setActive('') : setActive('education') }}>
            EDUCATION
            <span class='material-icons chevron'>
              chevron_right
            </span>
          </li>
          <li className={`${toggle} tab automation-tab  ${active === 'automation' ? 'current-tab' : ''}`}
            onClick={() => { active === 'automation' ? setActive('') : setActive('automation') }}>
            AUTOMATION
            <span class='material-icons chevron'>
              chevron_right
            </span>
          </li>
        </ul>
        <div className='search-container'>
          <span className='search'>Search</span>
          <span className='material-icons search'>search</span>
        </div>
      </nav>
      <div className='navbar-dropdown'>
        {active === 'solutions' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option solutions-li1'>
              <a href='#'>Solutions By Industry</a>
            </li>
            <li className='dropdown-option solutions-li2'>
              <a href='#'>Solutions By Process</a>
            </li>
            <li className='dropdown-option solutions-li3'>
              <a href='#'>Software Solutions</a>
            </li>
            <li className='dropdown-option solutions-li4'>
              <a href='#'>Services</a>
            </li>
          </ul>
        }
        {active === 'products' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option products-li1'>
              <a href='#'>New Releases</a>
            </li>
            <li className='dropdown-option products-li2'>
              <a href='#'>Limited Collection</a>
            </li>
          </ul>
        }
        {active === 'resources' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option resources-li1'>
              <a href='#'>React</a>
            </li>
            <li className='dropdown-option resources-li2'>
              <a href='#'>Javascript</a>
            </li>
            <li className='dropdown-option resources-li3'>
              <a href='#'>CSS</a>
            </li>
            <li className='dropdown-option resources-li4'>
              <a href='#'>HTML</a>
            </li>
          </ul>
        }
        {active === 'education' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option resources-li1'>
              <a href='#'>Hack Reactor 2021 July Graduate</a>
            </li>
            <li className='dropdown-option resources-li1'>
              <a href='#'>MVCC 2020 December AAS Computer Applications Programming</a>
            </li>
          </ul>
        }
        {active === 'automation' &&
          <ul className='dropdown-options-container'>
            <li className='dropdown-option automation-li1'>
              <a href='https://github.com/katieladd'>Just automate hiring me, I swear I'm cool 😎</a>
            </li>
          </ul>
        }
      </div>
    </>
  )

}

export default Nav;