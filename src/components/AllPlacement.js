import React, { useEffect, useRef, useState } from 'react'
import Rahul from './Img/Rahul.png'
import top2 from './Img/top2.png'
import top3 from './Img/top3.png'
import top4 from './Img/top4.png'
import searchgif from './Vedio/search.gif'
function AllPlacement() {
    const list = [
        {
            name: 'Rahul Thapliyal',
            imgurl: Rahul,
            Companyname: 'MicroSoft',
            packages: '43.3',
            duration: '2016-20'
        }, {
            name: 'Taranjeet Kaur',
            imgurl: top2,
            Companyname: 'Adobe',
            packages: '43.17',
            duration: '2016-20'
        }, {
            name: 'Riya Verma',
            imgurl: top3,
            Companyname: 'Adobe',
            packages: '40',
            duration: '2015-19'
        }, {
            name: 'Himakshi Salhotra',
            imgurl: top4,
            Companyname: 'Adobe',
            packages: '40',
            duration: '2015-19'
        }, {
            name: 'Rahul Thapliyal',
            imgurl: Rahul,
            Companyname: 'MicroSoft',
            packages: '43.3',
            duration: '2016-20'
        }, {
            name: 'Taranjeet Kaur',
            imgurl: top2,
            Companyname: 'Adobe',
            packages: '43.17',
            duration: '2016-20'
        }, {
            name: 'Riya Verma',
            imgurl: top3,
            Companyname: 'Adobe',
            packages: '40',
            duration: '2015-19'
        }, {
            name: 'Himakshi Salhotra',
            imgurl: top4,
            Companyname: 'Adobe',
            packages: '40',
            duration: '2015-19'
        }, {
            name: 'Rahul Thapliyal',
            imgurl: Rahul,
            Companyname: 'MicroSoft',
            packages: '43.3',
            duration: '2016-20'
        }, {
            name: 'Taranjeet Kaur',
            imgurl: top2,
            Companyname: 'Adobe',
            packages: '43.17',
            duration: '2016-20'
        }, {
            name: 'Riya Verma',
            imgurl: top3,
            Companyname: 'Adobe',
            packages: '40',
            duration: '2015-19'
        }, {
            name: 'Himakshi Salhotra',
            imgurl: top4,
            Companyname: 'Adobe',
            packages: '40',
            duration: '2015-19'
        }, {
            name: 'Rahul Thapliyal',
            imgurl: Rahul,
            Companyname: 'MicroSoft',
            packages: '43.3',
            duration: '2016-20'
        }, {
            name: 'Taranjeet Kaur',
            imgurl: top2,
            Companyname: 'Adobe',
            packages: '43.17',
            duration: '2016-20'
        }, {
            name: 'Riya Verma',
            imgurl: top3,
            Companyname: 'Adobe',
            packages: '40',
            duration: '2015-19'
        }, {
            name: 'Himakshi Salhotra',
            imgurl: top4,
            Companyname: 'Adobe',
            packages: '40',
            duration: '2015-19'
        }
    ]
    const [search, setSearch] = useState('');
    var count = 0;
    const myref = useRef();
    const handlecount = (val) => {
        count = val;
        return 1;
    }
    const isEqual = (itemE, searchV) => {
        itemE = itemE.toUpperCase();
        let searchp = searchV;
        searchV = searchV.toUpperCase();
        if (searchp === searchV && itemE.indexOf('-') === -1) {
            return parseInt(itemE) >= parseInt(searchV);
        }
        let value = itemE.indexOf(searchV);
        if (value !== -1) {
            return true;
        }
        else {
            return false;
        }
    }

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
                    <div className='m-3 block w-full'>
                        <input placeholder='Search by (Company Name, Packages or year)' defaultValue={search} onChange={(e) => { setSearch(e.target.value) }} className='w-4/5 md:w-2/3 lg:w-1/3 m-4 p-2 text-lg rounded border-2 shadow-lg border-gray-300 focus:border-gray-400 focus:outline-none' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 colplace m-2 lg:mx-4 w-full items-center justify-center place-items-center text-gray-700 over'>
                        {
                            list.map((item, i) => {
                                return search ? ((isEqual(item.packages, search) || isEqual(item.duration, search) || isEqual(item.Companyname, search)) ? (handlecount(1)) && (
                                    < div key={i} ref={myref} className='w-[75%] sm:w-full m-2  h-[21rem] flex items-center justify-center group'>
                                        <div className='card border border-white rounded-lg'>
                                            <div className='text-center font-medium text-xl p-2 group-hover:text-2xl duration-500'>{item.name}</div>
                                            <div className="flex flex-col items-center pb-10">
                                                <img className="m-2 mb-3 w-28 h-28 rounded-full border-gray-600 shadow-xl group-hover:w-32 group-hover:h-32 duration-500" src={item.imgurl} alt="..." />
                                                <h4 className="m-1 text-xl font-medium text-gray-600 italic group-hover:text-2xl duration-500">{item.Companyname}</h4>
                                                <h4 className="text-lg text-gray-500  group-hover:text-xl duration-500">{item.packages} L.P.A</h4>
                                                <h4 className="text-lg text-gray-500group-hover:text-xl duration-500">({item.duration})</h4>
                                            </div>
                                        </div>
                                    </div>
                                ) : <></>) : (handlecount(0)) &&
                                (
                                    <div key={i} ref={myref} className='w-[75%] sm:w-full m-2  h-[21rem] flex items-center justify-center group'>
                                        <div className='card border border-white rounded-lg'>
                                            <div className='text-center font-medium text-xl p-2 group-hover:text-2xl duration-200'>{item.name}</div>
                                            <div className="flex flex-col items-center pb-10">
                                                <img className="m-2 mb-3 w-28 h-28 rounded-full border-gray-600 shadow-xl group-hover:w-32 group-hover:h-32 duration-200" src={item.imgurl} alt="..." />
                                                <h4 className="m-1 text-xl font-medium text-gray-600 italic group-hover:text-2xl duration-200">{item.Companyname}</h4>
                                                <h4 className="text-lg text-gray-500  group-hover:text-xl duration-200">{item.packages} L.P.A</h4>
                                                <h4 className="text-lg text-gray-500  group-hover:text-xl duration-200">({item.duration})</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        count === 0 && search ?
                            <div className='mb-4 flex w-full items-center justify-center'>
                                <div className='w-[75%] sm:w-full m-2  h-[21rem] flex items-center justify-center'>
                                    <div className='card border h-full border-white text-gray-700 rounded-lg flex flex-col items-center text-2xl font-semibold italic justify-center'>
                                        <img src={searchgif} alt='...' />
                                        <span className='my-10 italic'>No Pages Found!</span>
                                    </div>
                                </div>
                            </div> : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default AllPlacement