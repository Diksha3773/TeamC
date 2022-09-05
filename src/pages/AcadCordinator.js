import React, { useEffect, useState } from 'react'
// import top2 from '../components/Img/top2.png'
// import top3 from '../components/Img/top3.png'
import AcadCard from './AcadCard'
function AcadCordinator() {
    const CoordinatorList = [
        {
            Name: "Dr. Geeta Sikha",
            Photo: "https://www.nitj.ac.in/images/faculty/20071962443.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. AmritPal Singh",
            Photo: "https://www.nitj.ac.in/images/faculty/21010923445.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. K P Sharma",
            Photo: "https://www.nitj.ac.in/images/faculty/22020989592.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. Kuldeep Kumar",
            Photo: "https://www.nitj.ac.in/images/faculty/18012437847.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. Prashant Kumar",
            Photo: "https://www.nitj.ac.in/images/faculty/20112211529.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. Rajneesh Rani",
            Photo: "https://www.nitj.ac.in/images/faculty/22012989244.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        },
    ]
    const [search, setSearch] = useState('');
    const [val, setVal] = useState(2)
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
        for(let i=0;i<CoordinatorList.length;i++){
            if(isEqual(CoordinatorList[i].Name,search)){
                setVal(i);
                break;
            }
        }
    }, [search])
    return (
        <>
            <div className="text-gray-600 w-full h-full mb-32">
                <div className="flex flex-col px-5 py-24 mx-auto w-full h-full">
                    <div className="flex flex-col text-center w-full mb-2">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Academic Coordinator</h1>
                    </div>
                    <hr />
                    <div className='relative flex items-center w-full my-16'>
                        <input placeholder='Search by Assistant Professor Name' defaultValue={search} onChange={(e) => { setSearch(e.target.value) }} className='w-11/12 md:w-4/5 mx-auto p-2 text-lg rounded border-2 shadow-lg border-gray-300 focus:border-gray-400 focus:outline-none' />
                    </div>
                    <div className='mt-48'>
                        <div className='top-4 w-full flex items-center justify-center relative'>
                            <div className='absolute hidden sm:flex md:left-[5%] lg:left-[8%] xl:left-[5%] max-w-[14rem] max-h-[17rem] overflow-hidden rounded-3xl'>
                                <AcadCard Name={CoordinatorList[((val - 2)%6+6)%6].Name} Photo={CoordinatorList[((val - 2)%6+6)%6].Photo} />
                            </div>
                            <div className='absolute hidden sm:flex sm:left-[14%] md:left-[19%] lg:left-[14%] xl:left-[19%] overflow-hidden max-w-[18rem] max-h-[20rem] rounded-3xl'>
                                <AcadCard Name={CoordinatorList[((val - 1)%6+6)%6].Name} Photo={CoordinatorList[((val - 1)%6+6)%6].Photo} />
                            </div>
                            <div className='absolute z-20 max-w-[22rem] max-h-[25rem] rounded-3xl overflow-hidden'>
                                <AcadCard Name={CoordinatorList[((val)%6+6)%6].Name} Photo={CoordinatorList[((val)%6+6)%6].Photo} />
                            </div>
                            <div className='absolute overflow-hidden hidden sm:flex sm:right-[14%] md:right-[19%] lg:right-[14%] xl:right-[19%] max-w-[18rem] max-h-[20rem] rounded-3xl z-10'>
                                <AcadCard Name={CoordinatorList[((val + 1)%6+6)%6].Name} Photo={CoordinatorList[((val + 1)%6+6)%6].Photo} />
                            </div>
                            <div className='absolute overflow-hidden hidden sm:flex md:right-[8%] xl:right-[5%] max-w-[14rem] max-h-[17rem] rounded-3xl'>
                                <AcadCard Name={CoordinatorList[((val + 2)%6+6)%6].Name} Photo={CoordinatorList[((val + 2)%6+6)%6].Photo} />
                            </div>
                        </div>

                        <div className='w-full flex items-center justify-between p-2'>
                            <button className='w-5 h-5 active:translate-y-1' onClick={()=>setVal(() => ((val-1)))}><svg xmlns='http://www.w3.org/2000/svg' fill='#4a70a3' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z' /></svg></button>
                            <button className='w-5 h-5 active:translate-y-1'onClick={()=>setVal(() => ((val+1)))}><svg xmlns='http://www.w3.org/2000/svg' fill='#4a70a3' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z' /></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcadCordinator