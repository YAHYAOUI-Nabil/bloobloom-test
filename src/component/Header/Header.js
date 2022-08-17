import React from 'react';

import './header.css';
import { useStateContext } from '../../contexts/ContextProvider';

const Header = () => {
  const {collectionsName} = useStateContext();

  return (
    <div className='header'>
      <div className='space'></div>
      <div className='collection-name'>
        <h1>{collectionsName}</h1>
      </div>
      <div className='filters'>
        <div className='color-filter'>
          <div className='filter-name_container'>
            <h4 className='filter-name'>COLOUR</h4>
          </div>
          <div className='color-filter-items'>
            <ul className='color-filter-items-list'>
              <li>Black</li>
              <li>Tortoise</li>
              <li>Coloured</li>
              <li>Crystal</li>
              <li>Dark</li>
              <li>Bright</li>
            </ul>
          </div>
        </div>
        <div className='shape-filter'>
          <div className='filter-name_container'>
            <h4 className='filter-name'>SHAPE</h4>
          </div>
          <div className='shape-filter-items'>
            <ul className='shape-filter-items-list'>
              <li>Square</li>
              <li>Rectangle</li>
              <li>Round</li>
              <li>Cat-eye</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;