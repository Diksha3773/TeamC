import React from 'react'
// import top2 from '../components/Img/top2.png'
// import top3 from '../components/Img/top3.png'
// import top4 from '../components/Img/top4.png'
function AcadCordinator() {
    return (
        <>
            <div className='w-full h-full flex items-center justify-center flex-col mt-20'>
                <h1 className='p-4 m-2 text-gray-700 shadow-lg text-2xl font-bold'>Academic Coordinator</h1>
                <div className='bg-[#171326] rounded-[5px] shadow-sm pt-[30px] w-[270px] max-w-full text-center flex flex-col items-center justify-center m-4 p-2'>
                    {/* <div className=' overflow-hidden flex items-center justify-center rounded-full m-4'> */}
                    <img src='https://www.nitj.ac.in/images/faculty/20071962443.jpg' alt="..." className='border-[#03BFCB] rounded-full p-2 w-36 h-36' />
                    {/* </div> */}
                    <div className='flex flex-col items-center justify-center my-2'>
                        <span className='text-xl font-semibold text-[#B3B8CD] '>Dr. Geeta Sikha</span>
                        <span className='text-lg font-medium text-[#B3B8CD] py-1'>Assistant Professor</span>
                    </div>
                    <div className="p-2 m-2 text-xl text-white bg-[#231E39] w-full flex items-center justify-center rounded-sm">
                        <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-600 mx-1 flex items-center justify-center" ><i className="fa fa-envelope"></i></div>
                        <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-600 mx-1 flex items-center justify-center" ><i className="fa fa-instagram"></i></div>
                        <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-600 mx-1 flex items-center justify-center" ><i className="fa fa-square-phone"></i></div>
                        <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-600 mx-1 flex items-center justify-center" ><i className="fa fa-linkedin"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcadCordinator