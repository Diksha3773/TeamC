import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Placement from './Placement'
function TopPlacement() {
  let navigate = useNavigate();
  return (
    <>
      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-3 mx-3 my-[72px] pt-[54px]'>
        <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[410] tracking-wide leading-8 text-[#fff] shadow-lg rounded-3xl text-2xl'>Top Placements</div>
        <div className='hidden md:grid md:grid-cols-2 m-2 lg:mx-4 w-full items-center justify-center place-items-center text-gray-700'>
          <Placement search={""} cnt={4} />
        </div>
        <div className='grid md:hidden grid-cols-1 m-2 lg:mx-4 w-full items-center justify-center place-items-center text-gray-700'>
          <Placement search={""} cnt={2} />
        </div>
        <button class="flex hover:shadow-lg hover:-translate-y-1 hover:shadow-yellow-500/50 bg-transparent my-2 text-lg text-blue-700 font-medium border hover:border-blue-900 border-blue-400 duration-500 py-3 px-4 rounded mx-auto tracking-wide active:translate-y-[2px]" onClick={() => navigate('/placements')}>
          View More
        </button>
      </div>
    </>
  )
}

export default TopPlacement