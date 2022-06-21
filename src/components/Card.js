import React from 'react'
const Card = ({ image, title, body }) => {
  return (
    <div className='w-[300px] overflow-hidden shadow-md shadow-teal-600'>
      <div className='overflow-hidden h-[200px]'>
        <img src={image}></img>
      </div>
      <div className='text-center '>
        <h1><b> {title}</b></h1>
      </div>
      <p className='p-2'>{body}</p>
      <button className='text-blue-600 underline float-right'><a>Read More</a></button>
    </div>
  )
}

export default Card