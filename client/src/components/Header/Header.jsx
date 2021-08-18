import React from 'react';
const cartItems = 3;
const Header = () => {
  return (
    <header className='header'>
      <div className='language'>
        <div id="flag"></div>
        <p className='lang'>EN</p>
      </div>
      <ul className='header-icons'>
        <li>
          <i className='material-icons verified'>verified_user</i>
          <div className='menu-footer'>Safety</div>
        </li>
        <li>
          <i className='material-icons help'>help</i>
          <div className='menu-footer'>Help</div>
        </li>
        <li>
          <i className='material-icons location'>location_on</i>
          <div className='menu-footer'>Where to Buy/Rent</div>
        </li>
        <li>
          <i className='material-icons person'>person</i>
        </li>
        <li>
        < i className='material-icons cart'>shopping_cart</i>
        <div className='cart-items'>{cartItems}</div>
        </li>
      </ul>

    </header>
  )
}

export default Header;