import React, { useEffect, useState } from 'react'
import Placement from './Placement'
function AllPlacement() {
    
    const [search, setSearch] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className='h-full w-full bg-white mt-4'>
                <div className='flex flex-col justify-center rounded items-center w-full sm:w-[98%] mx-auto text-center shadow-md'>
                    <div className='flex flex-col p-2 mx-2 my-10 text-center text-opacity-95 text-gray-700'>
                        <span className='text-4xl font-sans font-bold'>Placements </span>
                        <span className='text-xl font-mono font-semibold '> (Computer Science and Engineering)</span>
                    </div>
                    <div className='m-3 block w-full mb-16'>
                        <input placeholder='Search by (Company Name, Packages or year)' defaultValue={search} onChange={(e) => { setSearch(e.target.value) }} className='w-4/5 m-4 p-2 text-lg rounded border-2 shadow-lg border-gray-300 focus:border-gray-400 focus:outline-none' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 colplace m-2 lg:mx-4 w-full items-center justify-center place-items-center text-gray-700 over'>
                        <Placement search={search}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllPlacement