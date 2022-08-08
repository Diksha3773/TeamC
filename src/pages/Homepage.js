import React from 'react'
import { Department } from '../components/department'
import Imagesroll from '../components/Imagesroll'
import TopPlacement from '../components/TopPlacement'


function Homepage({offtop}) {
  return (
    <div>
        <Imagesroll offtop = {offtop}/>
        <Department/>
        <TopPlacement/>
        
    </div>
  )
}

export default Homepage