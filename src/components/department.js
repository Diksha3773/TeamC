import React from 'react'
import uuid from 'react-uuid';
import Card from './Card';

const news = ['Congratulations to Yogita, B. Tech Final year, ECE Department for getting placed at Atlassian at a whopping CTC of 52LPA through an off-campus drive.',
    'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
    ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
    'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
    'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
    'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

const activity = ['Website Launch by Mr. Ravneet Kotwal, (Director of Sales and Marketing, Texas Instruments, India. )',
    'Short Term Courseon Low Power VLSI Design for Communication systems and Networks', 'Congratulations to Yogita, B. Tech Final year, ECE Department for getting placed at Atlassian at a whopping CTC of 52LPA through an off-campus drive.',
    'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
    ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
    'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
    'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
    'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

const highlights = ['Applications are Invited for the ', 'Selected Candidates for PhD', 'Online GIAN Course on "Nonwoven Technology and Recent Developments" ',
    '(June 20 - 24, 2022)Note: The Last Date for Registration has been extended upto 18th June, 2022', 'Self Sponsored Three Days Workshop on "Molecular Dynamics Simulation & Analysis" (August 05 - 07, 2022) ',
    'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
    ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
    'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
    'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
    'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020']
const Departmentupper = (props) => {
    return (
        <div className='flex flex-col sm:mx-5
                    md:flex-row justify-around lg:mx-12 '>
            {/* HOD */}
            {/* <div className='flex border rounded shadow-lg flex-col m-4 p-2 items-center justify-center md:w-[35%] lg:w-1/3 h-[500px]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-2xl md:text-xl lg:text-3xl text-[#045F5F] m-2'><b>Head Of Department</b></h1>
                    <img className='border rounded-4 shadow-lg rounded-teal-900 rounded-md m-4 h-72 w-56 md:h-52 md:w-40 ' src={props.hod} alt=''/>
                </div>
                <h1 className='text-teal-900 text-lg md:text-xl font-medium'>{props.nameofhod}</h1>
                <p className='text-center p-1 md:text-lg md:p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.</p>
            </div> */}



            {/*  Activity  */}
            <div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2 '>
                <i className='text-2xl font-serif text-center animate-pulse'><b>Activities</b></i>
                <div className='overflow-y-scroll scrollbar shadow-md rounded-lg  border-t-2 border-green-500'>
                    <ol>
                        {
                            activity.map((n) => <li key={uuid()} className='list-[square] text-base p-3 list-inside  bg-green-100 hover:bg-yellow-400  '>{n}</li>)
                        }
                    </ol>
                </div>
                <div className='block'>
                    <button className='float-right bg-teal-700  w-20 h-10 p-2 m-4 text-white rounded-lg 
                                       hover:bg-blue-700 hover:text-sm focus:ring-4 focus:ring-blue-300 '>View All</button>
                </div>

            </div>
            {/* news */}
            <div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2 '>
                <i className='text-2xl font-serif text-center animate-pulse '><b>What's New ?</b></i>
                <div className='overflow-y-scroll scrollbar  rounded-lg shadow-md  border-t-2 border-red-500'>

                    <ol>
                        {
                            news.map((n) => <li key={uuid()} className='list-disc text-base p-3 list-inside bg-red-100 hover:bg-yellow-400  '>{n}</li>)
                        }
                    </ol>
                </div>
                <div className='block'>
                    <button className='float-right bg-red-600  w-20 h-10 p-2 m-4 text-white rounded-lg 
                                       hover:bg-blue-700 hover:text-sm focus:ring-4 focus:ring-blue-300 '>View All</button>
                </div>
                {/* highlights */}
            </div>
            <div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2 '>
                <i className='text-2xl font-serif text-center animate-pulse'><b>Highlights</b></i>
                <div className='overflow-y-scroll scrollbar rounded-lg shadow-md  border-t-2 border-blue-500'>

                    <ol>
                        {
                            highlights.map((n) => <li key={uuid()} className='list-[square] text-base p-3 list-inside bg-blue-100 hover:bg-yellow-400  '>{n}</li>)
                        }
                    </ol>
                </div>
                <div className='block'>
                    <button className='float-right bg-blue-900  w-20 h-10 p-2 m-4 text-white rounded-lg 
                                       hover:bg-blue-700  hover:text-sm focus:ring-4 focus:ring-blue-300'>View All</button>
                </div>

            </div>


        </div>

    )
}


const Departmentlower = (props) => {
    return (
        <div className='m-3 mt-10 flex flex-col md:flex-row justify-center items-center md:justify-evenly overflow-y-hidden'>
            <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 md:w-1/2 ">
                <div className='flex justify-center items-center'>
                    <a href="/">
                        <img className="rounded-t-lg" src={props.departmentimage} alt="" />
                    </a>
                </div>

                <div className="p-5">
                    <a href="/">
                        <h1 className='underline text-center text-2xl m-2'> <b>Department of {props.name}</b></h1>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.introduction}</p>
                    <div className='block m-2 p-2'>
                        <button className=' float-right text-green-700 hover:font-semibold hover:text-blue-700 '>Read More  &rarr;</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full md:w-1/2 md:mx-3 aspect-video'>
                <div className='w-full my-2 flex justify-center items-center'>
                    <iframe className='block border p-0 shadow-lg rounded-xl h-[250px] w-[90%]'
                        src="https://www.youtube.com/embed/fd2hUOmm8kA?controls=0&amp;start=280&mute=1" title="NITJ" ></iframe>
                </div>
                <div className='w-full my-2 flex justify-center items-center'><Card title="Coding Club" image='https://qph.cf2.quoracdn.net/main-qimg-d0139b5cabcff7d5adad435605016120-lq'
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita." /> </div>
            </div>
        </div>
    )
}
export {
    Departmentupper,
    Departmentlower
}
