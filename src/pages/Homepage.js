import React from 'react'
import { Department } from '../components/department'
import Imagesroll from '../components/Imagesroll'
import TopPlacement from '../components/TopPlacement'


function Homepage() {
  return (
    <div>
        <Imagesroll/>
        <Department/>
        <TopPlacement/>
        
    </div>
  )
}

export default Homepage