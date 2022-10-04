import React, { useEffect } from 'react'
import Rahul from './Img/Rahul.png'
import top2 from './Img/top2.png'
import top3 from './Img/top3.png'
import top4 from './Img/top4.png'
import searchgif from './Vedio/search.gif'
function Placement({ search,cnt = Infinity }) {
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
    var count = 0;
    const handlecount = (val) => {
        count = val;
        return 1;
    }
    const isEqual = (itemE, searchV) => {
        itemE = itemE.toUpperCase();
        searchV = searchV.toUpperCase();
        console.log(searchV, itemE);
        if (!isNaN(searchV) && itemE.indexOf('-') === -1) {
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
            {
                list.map((item, i) => {
                    return search ? ((isEqual(item.packages, search) || isEqual(item.duration, search) || isEqual(item.Companyname, search)) ? (handlecount(1)) && (
                        <div key={i} class="flex flex-col flex-grow items-center content-center mt-0 text-inherit max-w-md">

                            <div class="flex md:flex-row border-t-0 text-[rgba(0,105,140,1)] max-w-min py-8 text-left text-base items-center content-center px-[18px]">
                                <div class="w-32 h-32 md:w-36 md:h-36 flex-grow-0 flex-shrink-0">
                                    <img src={item.imgurl} class="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='...'/>
                                </div>
                                <div class="flex flex-col flex-grow leading-8 mr-5 md:justify-start md:mt-0 ml-7 md:ml-9 md:mb-0 w-52">
                                    <div class="text-[22.5px]">{item.name}</div>
                                    <div class="font-semibold text-[rgba(0,0,0,0.7)] tracking-wide text-lg">{item.Companyname}</div>
                                    <div class="font-normal text-[rgba(0,0,0,0.7)] tracking-wide">{item.packages}  ({item.duration})</div>
                                </div>
                            </div>
                        </div>
                    ) : <></>) : (handlecount(0)) && (i<cnt)&&
                    (
                        <div key={i} class="flex flex-col flex-grow items-center content-center mt-0 text-inherit max-w-md">

                            <div class="flex md:flex-row border-t-0 text-[rgba(0,105,140,1)] max-w-min py-8 text-left text-base items-center content-center px-[18px]">
                                <div class="w-32 h-32 md:w-36 md:h-36 flex-grow-0 flex-shrink-0">
                                    <img src={item.imgurl} class="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0 border-2" alt='...'/>
                                </div>
                                <div class="flex flex-col flex-grow leading-8 mr-5 md:justify-start md:mt-0 ml-7 md:ml-9 md:mb-0 w-52">
                                    <div class="text-[22.5px]">{item.name}</div>
                                    <div class="font-semibold text-[rgba(0,0,0,0.7)] text-lg tracking-wide">{item.Companyname}</div>
                                    <div class="font-normal text-[rgba(0,0,0,0.7)] tracking-wide">{item.packages} L.P.A  ({item.duration})</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                count === 0 && search ?
                    <div className='mb-4 block mx-auto'>
                        <div className='w-[75%] sm:w-full m-2  h-[21rem] flex items-center justify-center'>
                            <div className='card border h-full border-white text-gray-700 rounded-lg flex flex-col items-center text-2xl font-semibold italic justify-center'>
                                <img src={searchgif} alt='...' />
                                <span className='my-10 italic'>No Pages Found!</span>
                            </div>
                        </div>
                    </div> : <></>
            }
        </>
    )
}

export default Placement