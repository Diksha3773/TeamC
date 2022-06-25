import React from 'react'
import Rahul from './Img/Rahul.png'
import top2 from './Img/top2.png'
import top3 from './Img/top3.png'
import top4 from './Img/top4.png'
function TopPlacement() {
    return (
        <>
            <div className='flex flex-col justify-center rounded items-center w-full sm:w-[98%] mx-auto text-center shadow-md'>
                <div className='flex flex-col p-2 m-2 text-center'>
                    <span className='text-3xl font-sans font-bold'>Top Placements </span>
                    <span className='text-lg font-mono font-semibold'> (Computer Science and Engineering)</span>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 m-2 lg:mx-4 w-full items-center justify-center'>
                    <div className='w-screen sm:w-auto relative m-2  h-[21rem] flex items-center justify-center group'>
                        <div class="flex flex-col items-center justify-center max-w-sm bg-white rounded-lg border-2  h-[19rem] border-gray-200 shadow-md w-full hover:h-[21rem] hover:w-[21rem] hover:absolute">
                            <div className='text-center font-medium text-xl m-2 p-2 group-hover:text-2xl'>Rahul Thapliyal</div>
                            <div class="flex flex-col items-center pb-10">
                                <img class="m-3 w-24 h-24 rounded-full border-gray-600 shadow-xl group-hover:w-28 group-hover:h-28" src={Rahul} alt="..." />
                                <h4 class="m-1 text-xl font-medium text-gray-900 group-hover:text-2xl">MicroSoft</h4>
                                <h4 class="text-lg text-gray-500 dark:text-gray-400 group-hover:text-xl">43.3 L.P.A</h4>
                                <h4 class="text-lg text-gray-500 dark:text-gray-400 group-hover:text-xl">(2016-20)</h4>
                            </div>
                        </div>
                    </div>
                    <div className='w-screen sm:w-auto relative m-2  h-[21rem] flex items-center justify-center group'>
                        <div class="flex flex-col items-center justify-center max-w-sm bg-white rounded-lg border-2  h-[19rem] border-gray-200 shadow-md w-full hover:h-[21rem] hover:w-[21rem] hover:absolute">
                            <div className='text-center font-medium text-xl m-2 p-2 group-hover:text-2xl'>Taranjeet Kaur</div>
                            <div class="flex flex-col items-center pb-10">
                                <img class="m-3 w-24 h-24 rounded-full border-gray-600 shadow-xl group-hover:w-28 group-hover:h-28" src={top2} alt="..." />
                                <h4 class="m-1 text-xl font-medium text-gray-900 group-hover:text-2xl">Adobe</h4>
                                <h4 class="text-lg text-gray-500  group-hover:text-xl">43.17 L.P.A</h4>
                                <h4 class="text-lg text-gray-500  group-hover:text-xl">(2016-20)</h4>
                            </div>
                        </div>
                    </div>
                    <div className='w-screen sm:w-auto relative m-2  h-[21rem] flex items-center justify-center group'>
                        <div class="flex flex-col items-center justify-center max-w-sm bg-white rounded-lg border-2  h-[19rem] border-gray-200 shadow-md w-full hover:h-[21rem] hover:w-[21rem] hover:absolute">
                            <div className='text-center font-medium text-xl m-2 p-2 group-hover:text-2xl'>Himakshi Salhotra</div>
                            <div class="flex flex-col items-center pb-10">
                                <img class="m-3 w-24 h-24 rounded-full border-gray-600 shadow-xl group-hover:w-28 group-hover:h-28" src={top4} alt="..." />
                                <h4 class="m-1 text-xl font-medium text-gray-900 group-hover:text-2xl">Adobe</h4>
                                <h4 class="text-lg text-gray-500 group-hover:text-xl">40 L.P.A</h4>
                                <h4 class="text-lg text-gray-500 group-hover:text-xl">(2015-19)</h4>
                            </div>
                        </div>
                    </div>
                    <div className='w-screen sm:w-auto relative m-2 h-[21rem] flex items-center justify-center group'>
                        <div class="flex flex-col items-center justify-center max-w-sm bg-white rounded-lg border-2  h-[19rem] border-gray-200 shadow-md w-full hover:h-[21rem] hover:w-[21rem] hover:absolute">
                            <div className='text-center font-medium text-xl m-2 p-2 group-hover:text-2xl'>Riya Verma</div>
                            <div class="flex flex-col items-center pb-10">
                                <img class="m-3 w-24 h-24 rounded-full border-gray-600 shadow-xl group-hover:w-28 group-hover:h-28" src={top3} alt="..." />
                                <h4 class="m-1 text-xl font-medium text-gray-900 group-hover:text-2xl">Adobe</h4>
                                <h4 class="text-lg text-gray-500 group-hover:text-xl">40 L.P.A</h4>
                                <h4 class="text-lg text-gray-500 group-hover:text-xl">(2015-19)</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-green-400 shadow-lg p-1 m-2 rounded-lg'>
                    <button className='text-lg text-white p-1 hover:text-lg hover:font-medium'>View All</button>
                </div>
            </div>
        </>
    )
}

export default TopPlacement