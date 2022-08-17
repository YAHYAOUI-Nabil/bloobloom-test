import React from 'react'

import './index.css'
import useFetch from '../hooks/useFetch'

const SunglassesWomen = () => {
  const API_URL = 'https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/sunglasses-women/glasses';
  const [glasses] = useFetch(API_URL);
    
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

export default SunglassesWomen