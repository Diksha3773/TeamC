import React from 'react'
import vision from './../components/Img/vision.gif'
import { useEffect } from 'react'
function VisionandMission() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col sm:mx-5
    md:flex-row justify-between lg:mx-12 '>
<div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2 rounded border shadow-lg bg-green-200 overflow-y-scroll scrollbar'>
<h1 className='text-center text-4xl my-5 text-teal-900'><b>Mission</b></h1>
<p className='my-10 text-center justify-center'>A mission statement is a concise explanation of the organization's reason for existence. It describes the organization's purpose and its overall intention. The mission statement supports the vision and serves to 
    communicate purpose and direction to employees, customers, vendors and other stakeholders
    A mission statement is a short statement of why an organization exists, what its overall goal is, identifying the goal of its operations: what kind of product or service it provides, its primary customers or market, and its geographical region of operation</p>
   </div>
<div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2 border rounded shadow-lg mx-2 overflow-clip'>
    <img src={vision} alt='Our Mission and Vision'/>
</div>
<div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2 border rounded shadow-lg bg-teal-600 overflow-y-scroll scrollbar'>
<h1 className='text-center text-4xl my-5 animate-pulse text-white'><b>Vision</b></h1>
<p className='my-10 text-center justify-center text-white'>A mission statement is a concise explanation of the organization's reason for existence. It describes the organization's purpose and its overall intention. The mission statement supports the vision and serves to 
    communicate purpose and direction to employees, customers, vendors and other stakeholders
    A mission statement is a short statement of why an organization exists, what its overall goal is, identifying the goal of its operations: what kind of product or service it provides, its primary customers or market, and its geographical region of operation</p>
   </div>
</div>

  )
}

export default VisionandMission