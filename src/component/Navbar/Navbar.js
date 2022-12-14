import React from 'react';
import {Link} from 'react-router-dom'
import {MdPlayArrow} from 'react-icons/md';

import Image from '../../assets/bloobloom.png';
import './navbar.css';



const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div>
          <div className='menu_container'>
            <div className='menu'>
              <a href='#menu' className='dropdown'>MENU</a>
            </div>
            <div className='sidebar-menu'>
              <ul>
                <li>
                  <div className='spectacles-menu'>
                    <div className='item'>
                        <div>
                        <span>SPECTACLES</span>
                      </div>
                      <div><MdPlayArrow className='arrow'/></div>
                    </div>
                    <div className='spactacles-menu-content'>
                    <ul>
                        <li>
                          <div className='sub-menu-content-item'>
                            <span><Link to='/collections/spectacles-women/glasses'>WOMEN</Link></span>
                          </div>
                        </li>
                        <li>
                          <div className='sub-menu-content-item'>
                            <span><Link to='/collections/spectacles-men/glasses'>MEN</Link></span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='sunglasses-menu'>
                    <div className='item'>
                        <div>
                        <span>SUNGLASSES</span>
                      </div>
                      <div><MdPlayArrow className='arrow'/></div>
                    </div>
                    <div className='sunglasses-menu-content'>
                      <ul>
                        <li>
                          <div className='sub-menu-content-item'>
                            <span><Link to='/collections/sunglasses-women/glasses'>WOMEN</Link></span>
                          </div>
                        </li>
                        <li>
                          <div className='sub-menu-content-item'>
                            <span><Link to='/collections/sunglasses-men/glasses'>MEN</Link></span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='home-try-on'>
                    <span>HOME TRY ON</span>
                  </div>
                </li>
                <li>
                  <div className='pair-for-pair'>
                    <span>PAIR FOR PAIR</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bloobloom_logo'>
          <img src={Image} alt='bloobloomLogo'/>
        </div>
    </div>
  </>
    
  )
}

export default Navbar;