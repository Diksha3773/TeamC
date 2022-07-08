import React from 'react'
import logo from './Img/logo.png'
import { useRef,useState } from 'react';
function Footer() {
    const ref = useRef(null);
    const handleClick = (scroll) => {
      scroll? ref.current?scrollIntoView({behavior: 'smooth'}):null:null;
      };
  return (
    
    <>
    <footer  className='bg-gray-200'>
        <div className="p-10 bg-neutral-700 text-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <div>
                      <img src={logo} alt="logo" className="h-24 w-24"/>
                        <h1 className="pt-7 text-3xl">Our Mission</h1>
                        <p className="pt-5 text-xl">To serve the nation and the world by graduating proficient, knowledgeable engineers in the field of Electronics, Communication and related areas through constsnt interaction with research organisations and industries.</p>
                    </div>
                    <div>
                        <h4 className="pt-32 text-2xl text-center underline">Quick Links</h4>
                        <ul className="mt-2 text-center">
                            <li className="pb-1"><a href="/" className="text-xl hover:text-yellow-500">Clubs</a></li>
                            <li className="pb-1"><a href="/" className="text-xl hover:text-yellow-500">Program's Regulations</a></li>
                            <li className="pb-1"><a href="/" className="text-xl hover:text-yellow-500">Academic Calendar</a></li>
                        </ul>
                    </div>
                    <div >
                        <h4 className="pt-32 text-2xl text-center underline">Contact Us</h4>
                        <ul className="mt-2 text-center">
                            <li className="pb-1 text-xl">Phone : +123456789</li>
                            <li className="pb-1 text-xl">Email : example@nitj.ac.in</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-stone-900 text-neutral-200 px-10">
            <div className="">
                <div className="text-center">
                    <div className="pt-2 text-xl text-white">
                        <a href="/" className="w-10 h-10 rounded-full bg-neutral-600 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="/" className="w-10 h-10 rounded-full bg-neutral-600 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fa fa-instagram"></i></a>
                        <a href="/" className="w-10 h-10 rounded-full bg-neutral-600 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fa fa-twitter"></i></a>
                        <a href="/" className="w-10 h-10 rounded-full bg-neutral-600 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="p-2">
                       <p>© Copyright 2016-2022, All Rights Reserved <strong>NIT Jalandhar</strong></p>
                    </div>
                </div>
                {/* <hr className=""/> */}
               
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer