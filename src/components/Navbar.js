import React, { useState } from 'react'
import logo from './Img/logo.png'
import comp from './Vedio/comp.mp4'
import Hambur from './Img/menu.png'
import Imagesroll from './Imagesroll'
function Navbar() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div className='flex flex-col h-auto w-full lg:h-screen'>
                <div className='h-24 p-2 flex bg-zinc-900 text-white w-full items-center bg-gradient-to-tr'>
                    <div className='flex items-center my-2'>
                        <img src={logo} className='h-20' alt='' />
                        <div className='mx-2'>
                            <div className='font-semibold'>
                                Department of Computer Science and Engineering
                            </div>
                            <div>Dr. B.R. Ambedkar</div>
                            <div>National Institute of Technology Jalandhar</div>
                        </div>
                    </div>
                </div>
                <button className='p-3 bg-zinc-900 flex items-center md:hidden'onClick={()=>{setOpen(!open)}} >
                    <img src={Hambur} alt="..." className='h-8 w-8 m-1 mx-2 p-1 rounded-lg hover:border' />
                </button>
                <div className='flex-col md:flex w-full justify-center md:p-2 md:items-center md:flex-row' style={open?{dispay:"flex"}:{display:"none"}}>
                    <div className='group bg-neutral-800 text-white shadow-sm p-2 m-0 md:border-none md:bg-white md:text-black'><a href='/' className='my-2 mx-4 font-medium hover:text-blue-600'>Home</a></div>
                    <div className='group bg-neutral-800 text-white shadow-sm p-2 m-0 md:border-none md:bg-white md:text-black'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>About us</span>
                        <div className='absolute z-10 mx-2 hidden border rounded-b-md bg-neutral-900 text-white group-hover:block'>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Vision and Missions</a></div>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Infrastructure: At a glance</a></div>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>HODs Message</a></div>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Achievements</a></div>
                            <div ><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Contact us</a></div>
                        </div>
                    </div>
                    <div className='group bg-neutral-800 text-white shadow-sm p-2 m-0 md:border-none md:bg-white md:text-black'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>Academics</span>
                        <div className='absolute z-10 mx-2 hidden border rounded-b-md bg-neutral-900 text-white group-hover:block'>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Programmes</a></div>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Academic Coordinates</a></div>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Syllabus</a></div>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Time-Tables</a></div>
                            <div ><a href='/' className='flex w-full p-2 font-medium hover:bg-neutral-600'>Department Activities Calendar</a></div>
                        </div>
                    </div>
                    <div className='group bg-neutral-800 text-white shadow-sm p-2 m-0 md:border-none md:bg-white md:text-black'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>People</span>
                        <div className='absolute z-10 mx-2 hidden border rounded-b-md bg-neutral-900 text-white group-hover:block'>
                            <div><a href='/' className='flex justify-center w-full p-2 font-medium hover:bg-neutral-600'>Faculty</a></div>
                            <div><a href='/' className='flex justify-center p-2 w-full font-medium hover:bg-neutral-600'>PhD Scholars</a></div>
                            <div><a href='/' className='flex justify-center p-2 w-fullfont-medium hover:bg-neutral-600'>Students</a></div>
                            <div><a href='/' className='flex justify-center p-2 w-full font-medium hover:bg-neutral-600'>Alumni*</a></div>
                            <div><a href='/' className='flex justify-center p-2 w-full font-medium hover:bg-neutral-600'>Staff</a></div>
                        </div>
                    </div>
                    <div className='group bg-neutral-800 text-white shadow-sm p-2 m-0 md:border-none md:bg-white md:text-black'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>Research and Labs</span>
                        <div className='absolute z-10 mx-2 hidden border rounded-b-md bg-neutral-500 text-white group-hover:grid group-hover:grid-cols-3  md:group-hover:grid-cols-2 lg:group-hover:grid-cols-3'>
                            <div className='block w-auto flex-initial m-2 rounded hover:text-blue-700'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center '>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Research Areas</span>
                                            <video src={comp} autoPlay loop muted className='vedio rounded-md' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center items-center'>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Department Labs</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center'>
                                        <a href='/'>
                                            <span className='card-title flex-col rounded-md'><div>Publications</div><div>(Year-wise)</div></span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center'>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Projects</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center'>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Consultancy</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded'>
                                    <div className='flex-auto text-center'>
                                        <a href='/'>
                                            <span className='card-title rounded-md'>Research Labs</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Imagesroll/>
            </div>
        </>
    )
}

export default Navbar
