import React from 'react'
import { Department } from '../components/department'
import Imagesroll from '../components/Imagesroll'
import TopPlacement from '../components/TopPlacement'

function Homepage() {
  return (
    <div className='flex items-center flex-col w-full px-auto'>
        <Imagesroll/>
        <Department/>
        <TopPlacement/>
    </div>
  )
}

export default Homepage