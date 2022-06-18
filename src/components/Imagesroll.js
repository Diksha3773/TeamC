import React, { useEffect, useState } from 'react'
import first from './Img/001_1.jpeg'
import sec from './Img/1.jpg'
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
            setValue(() => (value === 5 ? 0 : value + 1));
        }, 10000);
        return () => clearInterval(interval);
    }, [value])
    return (
        <>
            {value ? <div className="overflow-hidden shadow-lg bg-blend-darken">
                <img className="w-full shadow-lg bg-gradient-to-r from-gray-500 to-gray-400" src={image[value]} alt="..." />  
            </div>
                : <div className='flex flex-col instcount items-center justify-center text-center align-middle'>
                    <div className='font-semibold text-4xl m-4'>
                        Computer Science and Engineering
                    </div>
                    <div className='text-base m-2'>Dr. B.R. Ambedkar National Institute of Technology, Jalandhar</div>
                    <div className='flex text-4xl font-semibold m-2 md:m-8 md:w-2/3 text-center justify-center'>
                        <p>
                            Department that imparts knowledge to enable the students to solve challenging real world problems
                        </p>
                    </div>
                </div>

            }

        </>
    )
}

export default Imagesroll
