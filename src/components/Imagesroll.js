import React, { useEffect, useState } from 'react'
import first from './Img/homepage.jpg'
import sec from './Img/003.jpg'
import third from './Img/02.jpeg'
import four from './Img/002.jpg'
import five from './Img/002.png'
import six from './Img/03.jpeg'
function Imagesroll({opencheck}) {
    const image = [
        first,
        sec,
        third,
        four,
        five,
        six
    ]
    const [value, setValue] = useState(0);

    console.log(opencheck,'scroll');
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(opencheck,'scrollI');
            setValue(() => (opencheck?(value === 5 ? 0 : value + 1):value));
        }, 3000);
        return () => clearInterval(interval);
    }, [value,opencheck])
    return (
        <>

            {value ? <div className="relative group w-full h-[calc(100vw*0.5625)] text-center overflow-hidden shadow-lg">
                <img className="w-full h-full shadow-lg bg-gradient-to-r from-gray-500 to-gray-400" src={image[value]} alt="..." />
                <div className='w-full absolute py-auto hidden md:bottom-1/2 inset-x-0 text-center leading-4 md:group-hover:block'>
                    <button className='float-left flex h-16 w-16 translate-y-1/2 text-white z-10 transition bg-opacity-50 text-3xl  rounded-full bg-blue-300 items-center justify-center font-bold hover:bg-blue-900 m-2' onClick={() => { setValue(value === 0 ? 5 : value - 1) }}>&larr;</button>
                    <button className='float-right flex h-16 w-16 translate-y-1/2 text-white z-10 transition bg-opacity-50 text-3xl  rounded-full bg-blue-300 items-center justify-center font-bold hover:bg-blue-900 m-2' onClick={() => { setValue(value === 0 ? 5 : value - 1) }}>&rarr;</button>
                </div>
            </div>
                : <div className='flex flex-col group instcount2 items-center justify-center text-center align-middle border-none h-[calc(100vw*0.7)] sm:h-[calc(100vw*0.5625)]'>
                    <div className='font-semibold text-xl m-4 lg:text-4xl'>
                        Computer Science and Engineering
                    </div>
                    <div className='text-base m-2'><i>Dr. B.R. Ambedkar National Institute of Technology, Jalandhar</i></div>
                    <div className='flex text-2xl font-semibold m-2 md:m-8 md:w-2/3 text-center justify-center lg:text-4xl'>
                        <p>
                            Department that imparts knowledge to enable the students to solve challenging real world problems
                        </p>
                    </div>
                    <div className='w-full hidden absolute py-auto md:bottom-[40%] inset-x-0 text-center leading-4 md:group-hover:block'>
                        <button className='float-left flex h-16 w-16 translate-y-1/2 text-white z-10 transition bg-opacity-50 text-3xl  rounded-full bg-blue-300 items-center justify-center font-bold hover:bg-blue-900 m-2' onClick={() => { setValue(value === 0 ? 5 : value - 1) }}>&larr;</button>
                        <button className='float-right flex h-16 w-16 translate-y-1/2 text-white z-10 transition bg-opacity-50 text-3xl  rounded-full bg-blue-300 items-center justify-center font-bold hover:bg-blue-900 m-2' onClick={() => { setValue(value === 0 ? 5 : value - 1) }}>&rarr;</button>
                    </div>
                </div>

            }

        </>
    )
}

export default Imagesroll
