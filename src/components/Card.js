import React from 'react'
const Card = ({ title, image, body }) => {
    return (
        <div className="container w-full mx-auto flex flex-col">
            <div v-for="card in cards" className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                <div className="h-64 w-auto">
                    <img className="inset-0 h-full w-full object-cover object-center" src={image} alt='' />
                </div>
                <div className="w-full text-justify py-4 px-6 text-gray-800 flex flex-col justify-between">
                    <h3 className="font-semibold text-xl my-1 leading-tight truncate">{title}</h3>
                    <p className="mt-2">
                        {body}
                    </p>
                    <div className='block m-2 p-2'>
                        <button className=' float-right text-green-500 hover:font-semibold'>Read More  &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
