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
      <li className='material-icons verified'>verified_user</li>
      <li className='material-icons help'>help</li>
      <li className='material-icons location'>location_on</li>
      <li className='material-icons person'>person</li>
      <li className='material-icons cart'>shopping_cart</li>
      <li className='cart-items'>{cartItems}</li>
      </ul>

    </header>
  )
}

export default Header;