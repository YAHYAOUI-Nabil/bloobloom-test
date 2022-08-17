import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import './index.css'

const SpectaclesWomen = () => {
    const API_URL = 'https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses'
    const [glasses, setGlasses] = useState([])
  
    useEffect(() => {
        axios.get(API_URL).then(function (response) {
                                        console.log(response.data.glasses)
                                        setGlasses(response.data.glasses)
                                    })
                                    .catch(
                                    (error) => console.log(error)
                                    )
                                    
    }, [])
  return (
    <div >
        
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

export default SpectaclesWomen