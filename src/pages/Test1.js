import React from 'react'
import bg from '../components/Img/clg1.png'
import AcadCard from './AcadCard'
function Test1() {
    return (
        <>
            <div className='container relative mt-72' style={{ height: "100%" }}>
                <div className='top-4 w-full flex items-center justify-center relative'>
                    <div className='absolute left-[5%] max-w-[14rem] max-h-[17rem] overflow-hidden rounded-3xl'>
                    <AcadCard Name="Geeta Phogat" Photo="https://www.nitj.ac.in/images/faculty/20071962443.jpg"/>
                    </div>
                    <div className='absolute left-[19%] overflow-hidden max-w-[18rem] max-h-[20rem] rounded-3xl'>
                    <AcadCard Name="Geeta Phogat" Photo="https://www.nitj.ac.in/images/faculty/20071962443.jpg"/>
                    </div>
                    <div className='absolute z-20 max-w-[22rem] max-h-[25rem] rounded-3xl overflow-hidden'>
                        <AcadCard Name="Geeta Phogat" Photo="https://www.nitj.ac.in/images/faculty/20071962443.jpg"/>
                    </div>
                    <div className='absolute overflow-hidden right-[19%] max-w-[18rem] max-h-[20rem] rounded-3xl z-10'>
                    <AcadCard Name="Geeta Phogat" Photo="https://www.nitj.ac.in/images/faculty/20071962443.jpg"/>
                    </div>
                    <div className='absolute overflow-hidden right-[5%] max-w-[14rem] max-h-[17rem] rounded-3xl'>
                    <AcadCard Name="Geeta Phogat" Photo="https://www.nitj.ac.in/images/faculty/20071962443.jpg"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test1
