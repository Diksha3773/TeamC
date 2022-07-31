
import React from 'react'
const Card = ({ title, image, body }) => {
    return (
        <div className="container w-full min-h-fit mx-auto flex flex-col items-center justify-center">
            <div v-for="card in cards" className="flex flex-col lg:flex-row overflow-hidden bg-white border items-center justify-center rounded-lg shadow-lg  mt-4 w-100 mx-2">
                <div className="h-full w-full flex items-center justify-center">
                    <img className="inset-0 h-40 w-40 lg:w-full object-cover object-center" src={image} alt='' />
                </div>
                <div className="w-full text-justify py-4 px-6 text-gray-800 flex flex-col justify-between">
                    <h3 className="font-semibold text-xl my-1 leading-tight truncate">{title}</h3>
                    <p className="mt-2">
                        {body}
                    </p>
                    <div className='block  m-0 lg:m-2 p-2'>
                        <button className=' float-right text-green-500 hover:font-semibold hover:text-blue-700'>Read More  &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card