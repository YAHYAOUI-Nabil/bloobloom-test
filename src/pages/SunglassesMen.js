import React from 'react';

import './index.css';
import useFetch from '../hooks/useFetch';
import useCollection from '../hooks/useCollection';


const SunglassesMen = () => {
  const API_URL = 'https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/sunglasses-men/glasses';
  const [glasses] = useFetch(API_URL);
  useCollection('SUNGLASSES MEN');
    
  return (
    <div>
        <div className='glasses_container'>
          {glasses.map((item)=>(
            <div key={item.id} className='glass-item'>
              <img src={item.glass_variants[0].media[0].url} alt='glassImage' className='glass_img'/>
              <h3 className='glass_name'>{item.name}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SunglassesMen;