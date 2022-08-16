import React from 'react';
import Image from '../../assets/bloobloom.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='menu'>
        <a href='#menu'>MENU</a>
      </div>
      <div className='bloobloom_logo'>
        <img src={Image} alt='bloobloomLogo'/>
      </div>
        
    </div>
  )
}

export default Navbar;