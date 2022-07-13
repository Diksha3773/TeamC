import React from 'react'
import Card from './Card'
const Departmentupper = (props) => {
    return (

        <div className='m-3 mt-2 flex flex-col md:flex-row justify-center items-center md:justify-evenly overflow-y-hidden'>
            {/* // department intro */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-md md:w-1/2 ">

                <div className='flex justify-center items-center'>
                    <a href="/">
                        <img className="rounded-t-lg" src={props.departmentimage} alt="" />
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
                {/* club */}
                <div className='w-full my-2 md:my-1 flex justify-center items-center'><Card title="Coding Club" image='https://qph.cf2.quoracdn.net/main-qimg-d0139b5cabcff7d5adad435605016120-lq'
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                </div>
                {/* video */}
                <div className='w-full my-1 flex justify-center items-center'>
                    <iframe className='block border p-0 shadow-lg rounded-xl aspect-[16/7] w-[98%]'
                        src="https://www.youtube.com/embed/fd2hUOmm8kA?controls=0&amp;start=280&mute=1" title="NITJ" ></iframe>
                </div>

            </div>
        </div>

    )
}

export default Departmentupper