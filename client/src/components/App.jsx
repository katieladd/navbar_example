import React from 'react';
import Header from './Header/Header.jsx';
import Nav from './Header/Navbar.jsx';
import { Navbar, Container } from 'react-bootstrap';
const App = () => {
  return (
    <>
      <div className='page'>
      <div className='navigation'>
          <Header />
          <Nav />
        </div>
      </div>
    </>
  )
}

export default App;