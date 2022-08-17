import React from 'react';
import './header.css';
import { useStateContext } from '../../contexts/ContextProvider'

const Header = () => {
  // const {collectionsName} = useStateContext()
  const collectionName = 'SPECTACLES WOMEN';
  return (
    <div className='header'>
      <div></div>
      <div className='collection-name'>
        <h1>{collectionName}</h1>
      </div>
      <div className='filters'>
        <div className='color-filter'>
          <h4>COLOUR</h4>
        </div>
        <div className='shape-filter'>
          <h4>SHAPE</h4>
        </div>
      </div>
    </div>
  )
}

export default Header;