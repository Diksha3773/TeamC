import React, { useRef, useEffect } from 'react'
import './Newnavbar.css'
import logo from './Img/logo.png'
import rect from './Img/Rectangle 47 (1).png'
import comp from './Vedio/comp.mp4'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function NewNavbar({ handlescroll }) {
    const [index, setIndex] = useState(0)
    const list = [
        {
            list1: 'Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR',
            list2: 'डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर'
        }, {
            list1: 'डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर',
            list2: 'ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ'
        }, {
            list1: 'ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ',
            list2: 'Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR'
        }
    ]
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(getWindowSize());
    const [offtop, setOfftop] = useState(false)
    const myref = useRef();
    const getListsize = () => {
        setWidth(getWindowSize);
    }
    const Handlescroll = () => {
        let offtop1 = myref.current.getBoundingClientRect().top;
        if (offtop1 <= -105) {
            if (!offtop)
                setOfftop(true);
        } else {
            setOfftop(false)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', Handlescroll);
        window.addEventListener('resize', getListsize);
        return () => {
            window.removeEventListener('resize', getListsize);
        };
    }, []);
    useEffect(() => {
        let interval = setInterval(() => {
            setIndex((index) => { return index == 2 ? 0 : index + 1 })
        }, [3000])

        return () => {
            clearInterval(interval)
        }
    }, [index])

    return (
        <>
            <header className="sticky top-0">
                {/* <!-- TOP NAV BAR --> */}
                <div id="top_bar" className="flex flex-row items-center justify-center py-1 bg-gray-800 text-white font-bold px-12 text-xs h-10">
                    <div className="basis-1/2">
                        <div className="flex flex-row justify-center">
                            <div className="items-center flex p-1 pr-8" href="">
                                <span className="material-symbols-outlined"> engineering </span>
                                <a href="" className="pl-1.5 text-sm">Jobs</a>
                            </div>
                            <div className="items-center flex p-1 pr-8" href="">
                                <span className="material-symbols-outlined"> add_business </span>
                                <a href="" className="pl-1.5 text-sm">Tenders</a>
                            </div>
                            <div className="items-center flex p-1 pr-8" href="">
                                <span className="material-symbols-outlined"> badge </span>
                                <a href="" className="pl-1.5 text-sm">Placements</a>
                            </div>
                            <div className="items-center flex p-1 pr-8" href="">
                                <span className="material-symbols-outlined"> event_note </span>
                                <a href="" className="pl-1.5 text-sm">Resources</a>
                            </div>
                            <div className="items-center flex" href="">
                                <span className="material-symbols-outlined"> psychology_alt </span>
                                <a href="" className="pl-1.5 text-sm">Help</a>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 pl-8">
                        <div className="flex flex-row justify-center">
                            <div className="basis-1/3 items-center">
                                <span className="material-symbols-outlined"> public </span>
                                <span className="material-symbols-outlined"> public </span>
                                <span className="material-symbols-outlined"> public </span>
                            </div>
                            <div className="basis-1/3 flex items-center">
                                <span className="material-symbols-outlined"> g_translate </span>
                                <a href="" className="pl-1">हिन्दी / <span className="text-lg">A</span>+A-</a>
                            </div>
                            <div className="basis-1/3 flex items-center">
                                <span className="material-symbols-outlined"> contacts </span>
                                <a href="" className="pl-1.5 text-sm">ERP</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- INSTITUTE LOGO & NAME --> */}
                <div className="block">
                    <div className="flex items-center bg-color justify-between align-center py-2.5 px-16">
                        <div
                            className="basis-1/2 flex justify-center uppercase font-bold text-lg text-center max-w-lg px-16">
                            <p>{list[index].list1}</p>
                        </div>
                        <div
                            className="basis-1/2 flex justify-center uppercase font-bold text-lg text-center max-w-lg px-16">
                            <p>{list[index].list2}</p>
                        </div>
                    </div>
                </div>
                {/* <!-- IMAGE CONTAINER --> */}
                <div className="mx-auto absolute -translate-x-1/2 z-10 left-1/2" style={{ width: "253px" }}>
                    <img src={rect} alt="" />
                </div>
                <div id="logo_250" className="absolute -translate-x-1/2 z-10 left-1/2 top-12" style={{ width: "120px", height: "120px" }}>
                    <img src={logo} alt="logo" />
                </div>

                {/* NAV BAR */}

                <div className={'flex-col bg-gray-900 text-white md:flex w-full justify-between md:items-center md:flex-row h-12'} style={open ? { display: 'flex', transition: 'height 400ms cubic-bezier(0.23, 1, 0.32, 1) 4s' } : (width < 768 ? { display: "flex" } : (offtop ? { dispay: "flex", position: "fixed", height: "4rem", opacity: "1" } : { display: "flex" }))}>
                    <div className='basis-2/5 flex items-center justify-center'>
                        <div className='flex p-2 m-0'><button className="hover:shadow-lg hover:-translate-y-0 hover:shadow-gray-600 bg-transparent mx-4 md:mx-2 md:my-2 font-medium md:border md:hover:border-gray-900 border-gray-400 duration-500  md:py-2 md:px-3 rounded active:translate-y-2" onClick={() => { navigate("/"); setOpen(!open) }}>Home</button></div>
                        <div className='group shadow-sm p-2 m-0 md:border-none'>
                            <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>About us</span>
                            <div className='absolute right-1/4 md:right-auto z-10 mx-2 hidden border rounded-b-md bg-neutral-900   float-right group-hover:block'>
                                <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { navigate("/MissionandVision"); setOpen(!open) }}>Vision and Mission</button></div>
                                <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { navigate("/Infrastructure"); setOpen(!open) }}>Infrastructure: At a glance</button></div>
                                <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { navigate("/messageofHOD"); setOpen(!open) }}>HOD's Message</button></div>
                                <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { setOpen(!open) }}>Achievements</button></div>
                                <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg rounded-b-md' onClick={() => { handlescroll(); setOpen(!open) }} >Contact us</button></div>

                            </div>
                        </div>
                        <div className='group shadow-sm p-2 m-0 md:border-none'>
                            <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>Academics</span>
                            <div className='absolute right-[15%] md:right-auto z-10 mx-2 hidden border rounded-b-md bg-neutral-900 group-hover:block'>
                                <div > <button className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { setOpen(!open) }}>Programmes</button></div>
                                <div > <button className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { navigate("/Acadcord"); setOpen(!open) }}>Academic Coordinates</button></div>
                                <div ><button className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { navigate("/Syllabus"); setOpen(!open) }}>Syllabus</button></div>
                                <div > <button className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { navigate("/Timetable"); setOpen(!open) }}>Time-Tables</button></div>
                                <div > <button className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg rounded-b-md' onClick={() => { setOpen(!open) }}>Department Activities Calendar</button></div>
                            </div>
                        </div>
                    </div>
                    <div className='basis-2/5 flex items-center justify-center'>
                        <div className='group shadow-sm p-2 m-0 md:border-none'>
                            <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>Research and Labs</span>
                            <div className='absolute z-10 mx-2 hidden border rounded-b-md bg-neutral-500 group-hover:grid grid-cols-3 md:group-hover:grid-cols-2 lg:group-hover:grid-cols-3'>
                                <div className='block w-auto flex-initial m-2 rounded hover:text-blue-700'>
                                    <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                        <div className='flex-auto text-center '>
                                            <button className='w-full h-full' onClick={() => { setOpen(!open) }}>
                                                <span className='card-title rounded-md'>Research Areas</span>
                                                <video src={comp} autoPlay loop muted className='vedio rounded-md' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='block w-auto flex-initial m-2 rounded'>
                                    <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                        <div className='flex-auto text-center items-center'>
                                            <button className='w-full h-full' onClick={() => { setOpen(!open) }}>
                                                <span className='card-title rounded-md'>Department Labs</span>
                                                <video src={comp} autoPlay loop muted className='vedio' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='block w-auto flex-initial m-2 rounded'>
                                    <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                        <div className='flex-auto text-center'>
                                            <button className='w-full h-full' onClick={() => { setOpen(!open) }}>
                                                <span className='card-title flex-col rounded-md'><div>Publications</div><div>(Year-wise)</div></span>
                                                <video src={comp} autoPlay loop muted className='vedio' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='block w-auto flex-initial m-2 rounded'>
                                    <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                        <div className='flex-auto text-center'>
                                            <button className='w-full h-full' onClick={() => { setOpen(!open) }}>
                                                <span className='card-title rounded-md'>Projects</span>
                                                <video src={comp} autoPlay loop muted className='vedio' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='block w-auto flex-initial m-2 rounded'>
                                    <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                        <div className='flex-auto text-center'>
                                            <button className='w-full h-full' onClick={() => { setOpen(!open) }}>
                                                <span className='card-title rounded-md'>Consultancy</span>
                                                <video src={comp} autoPlay loop muted className='vedio' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='block w-auto flex-initial m-2 rounded'>
                                    <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                        <div className='flex-auto text-center'>
                                            <button className='w-full h-full' onClick={() => { setOpen(!open) }}>
                                                <span className='card-title rounded-md'>Research Labs</span>
                                                <video src={comp} autoPlay loop muted className='vedio' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group shadow-sm p-2 m-0 md:border-none'>
                            <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>People</span>
                            <div className='absolute right-1/2 md:right-auto z-10 mx-2 hidden border rounded-b-md bg-neutral-900 group-hover:block'>
                                <div> <button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { setOpen(!open) }}>Faculty</button></div>
                                <div> <button className='flex justify-center p-2 w-full font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { setOpen(!open) }}>PhD Scholars</button></div>
                                <div> <button className='flex justify-center p-2 w-full font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { setOpen(!open) }}>Students</button></div>
                                <div> <button className='flex justify-center p-2 w-full font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={() => { setOpen(!open) }}>Alumni*</button></div>
                                <div> <button className='flex justify-center p-2 w-full font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg rounded-b-md' onClick={() => { setOpen(!open) }}>Staff</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NewNavbar
function getWindowSize() {
    const innerwidth = window.innerWidth;
    return innerwidth;
}