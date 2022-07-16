import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import top2 from '../components/Img/top2.png'
// import top3 from '../components/Img/top3.png'
// import top4 from '../components/Img/top4.png'
function AcadCordinator() {
    const [openmail, setOpenmail] = useState(false);
    const [openph, setOpenph] = useState(false);
    const [copied, setCopied] = useState(false)
    const handlesvgclick = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (copied) setCopied(false);
        }, [1000])
        return ()=>clearInterval(interval)
    }, [copied])

    return (
        <>
            <div className='bg-[#231E39] w-full h-full flex items-center justify-center flex-col'>
                <div className={"absolute bg-green-300 text-white m-1 py-2 px-4 rounded text-lg font-medium " + (copied ? 'flex' : 'hidden duration-[2000] ease-out')}>Copied Successfully</div>
                <h1 className='p-4 mb-4 text-white shadow-lg text-2xl font-bold'>Academic Coordinator</h1>
                <div className='bg-[#171326] m-2 w-72 max-w-[98%] h-fit border rounded-lg flex flex-col items-center text-center px-1 py-4 shadow'>
                    <div className='w-24 h-24 overflow-hidden flex items-center justify-center rounded-full border-2 border-[#7a6caa] m-4'>
                        <img src='https://www.nitj.ac.in/images/faculty/20071962443.jpg' alt="..." className='w-full h-full' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-xl font-semibold text-[#B3B8CD] '>Dr. Geeta Sikha</span>
                        <span className='text-lg font-medium text-[#B3B8CD] py-1'>Assistant Professor</span>
                    </div>
                    <div className='flex mt-4'>
                        <button className='border border-gray-400 px-4 py-2 m-1 rounded text-[#B3B8CD] hover:shadow hover:shadow-blue-400 duration-300 active:translate-y-[2px]' onClick={() => { setOpenmail(!openmail); setOpenph(false) }}>E-mail</button>
                        <button className='border border-gray-400 rounded px-4 py-2 m-1 text-[#B3B8CD] hover:shadow hover:shadow-blue-400 active:translate-y-[2px]' onClick={() => { setOpenph(!openph); setOpenmail(false) }}>Phone No.</button>
                    </div>
                    <div className={openmail || openph ? 'm-2 border rounded p-1' : 'hidden'}>
                        <div className={"text-[#B3B8CD] p-1 items-center justify-between " + (openmail ? 'flex' : 'hidden')}>xyz@nitj.ac.in
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-1 ml-4 font-medium hover:text-green-400 cursor-pointer" viewBox="0 0 16 16" onClick={() => handlesvgclick('yes')}>
                                <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                            </svg>
                        </div>
                        <div className={"text-[#B3B8CD] p-1 items-center justify-between " + (openph ? 'flex' : 'hidden')}>xxxxxx4567
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-1 ml-4 font-medium hover:text-green-400 cursor-pointer" viewBox="0 0 16 16" onClick={() => handlesvgclick('yes')}>
                                <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcadCordinator