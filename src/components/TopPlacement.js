import React from 'react'
import { useNavigate } from 'react-router-dom'
import AllPlacement from './AllPlacement'

import Rahul from './Img/Rahul.png'
import top2 from './Img/top2.png'
import top3 from './Img/top3.png'
import top4 from './Img/top4.png'
function TopPlacement() {
    let navigate = useNavigate();
    return (
        <>
            <div className='flex flex-col justify-center rounded items-center w-full sm:w-[98%] mx-auto text-center shadow-md my-8'>
                <div className='flex flex-col p-2 m-2 text-center'>
                    <span className='text-3xl font-sans font-bold'>Top Placements </span>
                    <span className='text-lg font-mono font-semibold '> (Computer Science and Engineering)</span>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 m-2 lg:mx-4 w-full items-center justify-center place-items-center text-gray-700 over'>

                    < div className='max-w-[95%] sm:w-full m-2  h-[21rem] flex items-center justify-center group'>
                        <div className='card border border-white rounded-lg'>
                            <div className='text-center font-medium text-xl p-2 group-hover:text-2xl duration-500'>Riya Verma</div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="m-2 mb-3 w-28 h-28 rounded-full border-gray-600 shadow-xl group-hover:w-32 group-hover:h-32 duration-500" src={top2} alt="..." />
                                <h4 className="m-1 text-xl font-medium text-gray-600 italic group-hover:text-2xl duration-500">Adobe</h4>
                                <h4 className="text-lg text-gray-500  group-hover:text-xl duration-500">40 L.P.A</h4>
                                <h4 className="text-lg text-gray-500group-hover:text-xl duration-500">2016-20</h4>
                            </div>
                        </div>
                    </div>
                    < div className='max-w-[95%] sm:w-full m-2  h-[21rem] flex items-center justify-center group'>
                        <div className='card border border-white rounded-lg'>
                            <div className='text-center font-medium text-xl p-2 group-hover:text-2xl duration-500'>Riya Verma</div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="m-2 mb-3 w-28 h-28 rounded-full border-gray-600 shadow-xl group-hover:w-32 group-hover:h-32 duration-500" src={top3} alt="..." />
                                <h4 className="m-1 text-xl font-medium text-gray-600 italic group-hover:text-2xl duration-500">Adobe</h4>
                                <h4 className="text-lg text-gray-500  group-hover:text-xl duration-500">Packages: 40 L.P.A</h4>
                                <h4 className="text-lg text-gray-500group-hover:text-xl duration-500">2016-20</h4>
                            </div>
                        </div>
                    </div>
                    < div className='max-w-[95%] sm:w-full m-2  h-[21rem] flex items-center justify-center group'>
                        <div className='card border border-white rounded-lg'>
                            <div className='text-center font-medium text-xl p-2 group-hover:text-2xl duration-500'>Riya Verma</div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="m-2 mb-3 w-28 h-28 rounded-full border-gray-600 shadow-xl group-hover:w-32 group-hover:h-32 duration-500" src={top4} alt="..." />
                                <h4 className="m-1 text-xl font-medium text-gray-600 italic group-hover:text-2xl duration-500">Adobe</h4>
                                <h4 className="text-lg text-gray-500  group-hover:text-xl duration-500">40 L.P.A</h4>
                                <h4 className="text-lg text-gray-500group-hover:text-xl duration-500">2016-20</h4>
                            </div>
                        </div>
                    </div>
                    < div className='max-w-[95%] sm:w-full m-2  h-[21rem] flex items-center justify-center group'>
                        <div className='card border border-white rounded-lg'>
                            <div className='text-center font-medium text-xl p-2 group-hover:text-2xl duration-500'>Riya Verma</div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="m-2 mb-3 w-28 h-28 rounded-full border-gray-600 shadow-xl group-hover:w-32 group-hover:h-32 duration-500" src={top4} alt="..." />
                                <h4 className="m-1 text-xl font-medium text-gray-600 italic group-hover:text-2xl duration-500">Adobe</h4>
                                <h4 className="text-lg text-gray-500  group-hover:text-xl duration-500">40 L.P.A</h4>
                                <h4 className="text-lg text-gray-500group-hover:text-xl duration-500">2016-20</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='bg-green-600 text-lg shadow-md w-24 h-12 p-2 m-0 mb-2 text-white rounded-lg hover:bg-green-700 hover:text-base focus:ring-4 focus:ring-green-300' onClick={() => { navigate("/placements") }}>View All</button>
                </div>
            </div>
        </>
    )
}

export default TopPlacement