import React from 'react'
const Departmentupper = (props) => {
    return (

        <div className='m-3 mt-2 flex flex-col md:flex-row justify-center items-center overflow-y-hidden'>
            {/* // department intro */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-md md:w-1/2 ">

                <div className='flex justify-center items-center'>
                    <a href="/">
                        <img className="rounded-t-lg" src={props.departmentimage} alt="..." />
                    </a>
                </div>

                <div className="p-5">
                    <a href="/">
                        <h1 className='underline text-center text-2xl m-2'> <b>Department of {props.name}</b></h1>
                    </a>
                    <p className="mb-3 font-normal text-justify text-gray-700 ">{props.introduction}</p>
                    <div className='block m-4 p-2'>
                        <button className=' float-right text-green-700 hover:font-semibold hover:text-blue-700 '>Read More  &rarr;</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col mb-10 justify-center items-center w-full md:w-1/2 md:mx-3 aspect-video'>
                <div className="max-w-full bg-white my-1">
                    {/* video */}
                    <div className='w-full mt-1 flex justify-center items-center'>
                        <iframe className='block border p-0 shadow-lg rounded-xl aspect-[16/7] w-[98%]'
                            src="https://www.youtube.com/embed/fd2hUOmm8kA?controls=0&amp;start=280&mute=1" title="NITJ" ></iframe>
                    </div>
                    {/* club */}
                    <div className="p-6 max-w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Mission and Vision</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati tempora distinctio quas nesciunt consectetur possimus, illum, temporibus accusamus qui molestiae accusantium ab nisi dolorum ut perferendis aperiam. Quam, accusamus vel explicabo quaerat quia reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quia nobis ab nihil perferendis voluptate omnis, quas facilis facere</p>
                        <a href="/" className="inline-flex items-center text-blue-600 hover:underline">
                            Read More
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Departmentupper