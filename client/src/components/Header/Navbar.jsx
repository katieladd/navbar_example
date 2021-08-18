import React, { useState } from 'react';

const Nav = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState('');

  const clickMenu = () => {
    toggle === 'ham-toggle' ? setToggle('') : setToggle('ham-toggle')
  }

  const activeItem = (val) => {
    active === val ? setActive('') : setActive(val)
  }

  return (
    <>
      <nav className='navigation-container'>
        {!toggle && <i className='material-icons ham-icon'
          onClick={() => { clickMenu() }}>
          menu
        </i>}
        <ul className={`navigation-tabs`}>
          {!toggle && <li id='logo'></li> }

          <li className={`${toggle} menu-header`}>
            <p className='menu'>Menu</p>
            <span className='material-icons'
            onClick={() => { clickMenu() }}>
              close
            </span>
          </li>
          <li value='solutions'
            className={`${toggle} tab solutions-tab  ${active === 'solutions' ? 'current-tab' : ''}`}
            onClick={() => { activeItem('solutions') }}>
              SOLUTIONS
            <span className='material-icons chevron'>
              chevron_right
            </span>
          </li>
          <li value='products'
            className={`${toggle} tab products-tab  ${active === 'products' ? 'current-tab' : ''}`}
            onClick={() => { activeItem('products')  }}>
            PRODUCTS
            <span className='material-icons chevron'>
              chevron_right
            </span>
          </li>
          <li value='resources'
            className={`${toggle} tab resources-tab  ${active === 'resources' ? 'current-tab' : ''}`}
            onClick={() => { activeItem('resources')  }}>
            RESOURCES
            <span className='material-icons chevron'>
              chevron_right
            </span>
          </li>
          <li value='education'
            className={`${toggle} tab education-tab  ${active === 'education' ? 'current-tab' : ''}`}
            onClick={() => { activeItem('education')  }}>
            EDUCATION
            <span className='material-icons chevron'>
              chevron_right
            </span>
          </li>
          <li value='automation'
            className={`${toggle} tab automation-tab  ${active === 'automation' ? 'current-tab' : ''}`}
            onClick={() => { activeItem('automation')  }}>
            AUTOMATION
            <span className='material-icons chevron'>
              chevron_right
            </span>
          </li>
          <li className='menu-footer'></li>
          <li className='menu-footer'></li>
          <li className='menu-footer'></li>
          <li className='menu-footer'></li>
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
              <a href='https://github.com/katieladd'>Automate hiring Katie 😎</a>
            </li>
          </ul>
        }
      </div>
    </>
  )

}

export default Nav;