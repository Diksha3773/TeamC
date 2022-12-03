import React, { useEffect } from 'react'
import { useState } from 'react'

function Programme() {
    
    const [program, setProgram] = useState('BTech');
    const handlescroll = (id) => {
        let str = "#" + id;
        setProgram(id);
        var element = document.getElementById(str);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        console.log(id, program)
    }
    const scrollNextPage = () => {
        const gallery = document.querySelector('#scrollcontrol');
        const gallery_scroller = gallery.querySelector('.cards');
        gallery_scroller.scrollBy(200, 0);
    }
    const scrollPrevPage = () => {
        const gallery = document.querySelector('#scrollcontrol');
        const gallery_scroller = gallery.querySelector('.cards');
        // const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
        gallery_scroller.scrollBy(-200, 0);
    }
    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <>
            <div className="text-gray-600 body-font w-full h-full">
                <div className="container flex flex-col px-5 pt-24 pb-12 mx-auto" style={{ height: "100%" }}>
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Programmes of Study</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Institute offers following Undergraduate, Postgraduate and Research Programmes in <b>Computer Science and Engineering</b></p>
                    </div>
                </div>
                <div id='scrollcontrol' className='relative w-[95%] mx-auto'>
                    <div className='cards flex snap-x overflow-x-auto scrollhide delay-200 scroll-smooth'>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className={"border-2 border-gray-200 px-4 py-6 rounded-lg active:translate-y-[2px] hover:shadow-lg cursor-pointer " + (program === 'BTech' ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => handlescroll('BTech')}>
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">BTech</h2>
                                <p className="text-sm p-1 leading-relaxed">(Bachelor of Technology)</p>
                            </div>
                        </div>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className={"border-2 border-gray-200 px-4 py-6 rounded-lg active:translate-y-[2px] hover:shadow-lg cursor-pointer " + (program === 'MTech' ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => handlescroll('MTech')}>
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">MTech</h2>
                                <p className="text-sm p-1 leading-relaxed">(Master of Technology)</p>
                            </div>
                        </div>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className={"border-2 border-gray-200 px-4 py-6 rounded-lg active:translate-y-[2px] hover:shadow-lg cursor-pointer " + (program === 'PhD' ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => handlescroll('PhD')}>
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">PhD</h2>
                                <p className="text-sm p-1 leading-relaxed">(Doctor of Philosophy)</p>
                            </div>
                        </div>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className={"border-2 border-gray-200 px-4 py-6 rounded-lg active:translate-y-[2px] hover:shadow-lg cursor-pointer " + (program === 'PDip' ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => handlescroll('PDip')}>
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">PG Diploma</h2>
                                <p className="text-sm p-1 leading-relaxed">(Postgraduate Diploma)</p>
                            </div>
                        </div>
                    </div>
                    <button className='absolute top-[45%] -left-1 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px] rotate-180' onClick={scrollPrevPage}>
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    </button>
                    <button className='absolute top-[45%] right-0 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px]' onClick={scrollNextPage}>
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    </button>
                </div>
                <div id='#BTech'>
                    <div className='mx-4 md:mx-12 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[500] text-[#fff] shadow-lg rounded-3xl text-lg sm:text-xl'>Curriculum</div>
                            <p className='mx-2 my-4'>Curriculum of B.Tech Programme in Computer Science and Engineering to be applicable from 2018 batch onwards(Annexure I - Curriculum of B.Tech program REVISED(10.01.2020))</p>
                            <div className='flex flex-col sm:flex-row'>
                                <div className='mb-1 py-2 px-4 sm:px-6 bg-[#28ABE3] text-[#fff] shadow rounded-xl mx-4 cursor-pointer hover:scale-[1.02] active:translate-y-1 uppercase tracking-wide text-[10px] sm:text-sm duration-300'>Curriculum(2018 admission onwards)</div>
                                <div className='mb-1 mx-4 py-2 px-4 sm:px-6 bg-[#28ABE3] text-[#fff] shadow rounded-xl cursor-pointer hover:scale-[1.02] active:translate-y-1 uppercase tracking-wide text-[10px] sm:text-sm duration-300'>B.Tech Regulations</div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-4 md:mx-12 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[500] text-[#fff] shadow-lg rounded-3xl text-lg sm:text-xl'>Program Outcomes</div>
                            <ol className='list-decimal'>
                                <li className='ml-8 mb-3'>Apply knowledge of mathematics, science, and engineering fundamentals in the domain of Electronics and Communication</li>
                            </ol>
                        </div>
                    </div>
                    <div className='mx-4 md:mx-12 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[500] text-[#fff] shadow-lg rounded-3xl text-lg sm:text-xl'>Program Educational Objectives</div>
                            <div className=''>
                                <div className='mx-2 mb-3'>
                                    <h2 className='text-black font-medium'>
                                        <i className="fas fa-lightbulb"></i>  PEO-1</h2>
                                    <p>To provide strong background in basic sciences, mathematics, computing and engineering principles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='#MTech'></div>
                <div id='#PhD'></div>
                <div id='#PDip'></div>
            </div>
        </>
    )
}

export default Programme
