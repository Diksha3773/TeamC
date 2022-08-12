import React, { useEffect, useState } from 'react'
import first from './Img/homepage.jpg'
import sec from './Img/003.jpg'
import third from './Img/02.jpeg'
import four from './Img/002.jpg'
import five from './Img/002.png'
import six from './Img/03.jpeg'
function Imagesroll() {
    const image = [
        first,
        sec,
        third,
        four,
        five,
        six
    ]
    const [value, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(() => ((value === 5 ? 0 : value + 1)));
        }, 6000);
        return () => clearInterval(interval);
    }, [value])
    return (
        <>
            <div className='flex mx-0 flex-col w-[90%] h-[calc(55vw*0.7)] sm:h-[calc(55vw*0.5625)] mt-4'>
                {value ? <div className={"group flex items-center justify-center place-items-center w-full h-[calc(100vw*0.5625)] text-center overflow-hidden shadow-lg relative"}>
                    <img className="w-full h-full shadow-lg bg-gradient-to-r from-gray-500 to-gray-400 aspect-video" src={image[value]} alt="..." />
                    <div className={"absolute py-auto hidden md:bottom-[40%] inset-x-0 text-center leading-4 justify-between md:group-hover:flex"}>
                        <button className='flex h-12 w-12 translate-y-1/2 text-white z-10 transition bg-opacity-50 text-xl  rounded-full bg-blue-300 items-center justify-center font-extrabold hover:bg-blue-900 m-2' onClick={() => { setValue(value === 0 ? 5 : value - 1) }}>&larr;</button>
                        <button className='flex h-12 w-12 translate-y-1/2 text-white z-10 transition bg-opacity-50 text-xl  rounded-full bg-blue-300 items-center justify-center font-extrabold hover:bg-blue-900 m-2' onClick={() => { setValue(value === 0 ? 5 : value - 1) }}>&rarr;</button>
                    </div>
                </div>
                    : 
                    <div className={"flex flex-col group w-full instcount2 items-center justify-center text-center align-middle border-none h-[calc(100vw*0.7)] sm:h-[calc(100vw*0.5625)] navimg relative"}>
                        <div className='font-semibold text-xl m-4 lg:text-4xl'>
                            Computer Science and Engineering
                        </div>
                        <div className='text-base m-2'><i>Dr. B.R. Ambedkar National Institute of Technology, Jalandhar</i></div>
                        <div className='flex text-2xl font-semibold m-2 md:m-8 md:w-2/3 text-center justify-center lg:text-4xl'>
                            <p>
                                Department that imparts knowledge to enable the students to solve challenging real world problems
                            </p>
                        </div>
                        <div className={"absolute hidden py-auto md:bottom-[40%] inset-x-0 text-center leading-4 group-hover:justify-between md:group-hover:flex"}>
                            <button className='flex h-12 w-12 translate-y-1/2 text-white z-10 transition bg-opacity-50 text-xl  rounded-full bg-blue-300 items-center justify-center font-extrabold hover:bg-blue-900 m-2' onClick={() => { setValue(value === 0 ? 5 : value - 1) }}>&larr;</button>
                            <button className='flex h-12 w-12 translate-y-1/2 text-white z-10 transition bg-opacity-50 text-2xl  rounded-full bg-blue-300 items-center justify-center font-extrabold hover:bg-blue-900 m-2' onClick={() => { setValue(value === 0 ? 5 : value - 1) }}>&rarr;</button>
                        </div>
                    </div>

                }
            </div>
        </>
    )
}

export default Imagesroll