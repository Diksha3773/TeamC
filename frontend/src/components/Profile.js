import React, { useState } from 'react'
import BaseTable from '../pages/BaseTable';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

function Profile() {
    var id = window.location.pathname;
    let i = id.length - 1;
    let str = "";
    while (id[i] !== '/') {
        str += id[i];
        i--;
    }
    id = parseInt(str);
    const [url, setUrl] = useState(useLocation());
    const { data, loading, error, reFetch } = useFetch(url.pathname);
    const Link = [
        { Title: 'About', show: false, search: false, thead: false, data: [{}, {}, {}, {}, {}] },
        { Title: 'Other profile links', show: false, search: false, thead: false, data: [{}, {}, {}, {}, {}] },
        { Title: 'Research Profile', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Journal Publications', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Conference Publications', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Book/Chapter Publications', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Research Projects', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Events Organized', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Professional Affiliations', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'PhD Supervised', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'PG Dissertation Guided', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Patents', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Admin. Responsiblities', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Award and Honours', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Download Profile as PDF', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
    ]
    const [active, setActive] = useState(0);
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
    return (
        <div className='w-full'>
            {
                data.map((item, i) => {
                    return (
                        i==id&&<div className="mt-16 py-4 w-[98%] mx-auto">
                            <div className="relative flex flex-col flex-auto w-full min-w-0 p-4 overflow-hidden break-words border shadow-md rounded-2xl bg-white/80 bg-clip-border mb-4 draggable mx-auto"
                                draggable="true">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex-none w-auto max-w-full px-3">
                                        <div className="w-20 h-20 xl:w-24 xl:h-24 flex-grow-0 flex-shrink-0">
                                            <img src={item.photo} className="w-full h-full object-cover object-left-top rounded-xl shadow-xl flex-grow-0 flex-shrink-0" alt='...' />
                                        </div>
                                    </div>
                                    <div className="flex-none w-auto max-w-full px-3 my-auto">
                                        <div className="h-full">
                                            <h5 className="mb-1 font-medium">{item.name}</h5>
                                            <p className="mb-0 font-semibold leading-normal text-size-sm">{item.position}</p>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full md:px-4">
                                        <div id='scrollcontrol' className='m-2 relative shadowp'>
                                            <div className='cards scrollhide flex items-center snap-x h-14 border-t border-b m-2 overflow-x-auto overflow-y-hidden'>
                                                {
                                                    Link.map((item, i) => {
                                                        return (
                                                            <div key={i} className={"border snap-center shrink-0 w-max rounded-xl px-3 py-1.5 m-1 cursor-pointer hover:text-purple-600 active:scale-95 duration-150 " + (active === i ? 'border-slate-800 text-purple-700 font-semibold' : '')} onClick={() => setActive(i)}>{item.Title}</div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <button className='absolute top-[25%] -left-3 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px] rotate-180' onClick={scrollPrevPage}>
                                                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                            </button>
                                            <button className='absolute top-[25%] -right-4 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px]' onClick={scrollNextPage}>
                                                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='w-[98%] my-2 duration-200'>
                                        <BaseTable show={Link[active].show} search={Link[active].search} thead={Link[active].thead} Data={Link[active].data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Profile