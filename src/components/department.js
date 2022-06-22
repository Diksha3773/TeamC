import React from 'react'
import uuid from 'react-uuid';
import Card from './Card';

const news = ['Congratulations to Yogita, B. Tech Final year, ECE Department for getting placed at Atlassian at a whopping CTC of 52LPA through an off-campus drive.',
    'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
    ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
    'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
    'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
    'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

const Departmentupper = (props) => {
    return (
        <div className='flex flex-col 
                    md:flex-row justify-evenly my-4'>
            <div className='flex border rounded shadow-lg flex-col m-4 p-2 items-center justify-center md:w-[35%] lg:w-1/3 h-[500px]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-2xl md:text-xl lg:text-3xl text-[#045F5F] m-2'><b>Head Of Department</b></h1>
                    <img className='border rounded-4 shadow-lg rounded-teal-900 rounded-md m-4 h-72 w-56 md:h-52 md:w-40' src={props.hod}></img>
                </div>
                <h1 className='text-teal-900 text-lg md:text-xl font-medium'>{props.nameofhod}</h1>
                <p className='text-center p-1 md:text-lg md:p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.</p>
            </div>

            <div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2'>
                <i className='text-2xl font-serif text-center md:text-start'><b>What's New ?</b></i>
                <div className='overflow-y-scroll scrollbar border rounded shadow-lg'>

                    {/* news */}
                    <ol>
                        {
                            news.map((n) => <li key={uuid()} className='list-disc border rounded-b-2 rounded-gray-300 text-base p-3 list-inside '>{n}</li>)
                        }
                    </ol>
                </div>
                <div className='block'>
                    <button className='float-right bg-[#21b684]  w-20 h-10 p-2 m-4 text-white rounded-lg'>View All</button>
                </div>
            </div>


        </div>

    )
}


const Departmentlower = (props) => {
    return (
        <div className='m-3 mt-10 flex flex-col md:flex-row justify-center items-center md:justify-evenly'>
            <div className='m-2 flex flex-col justify-between w-full md:w-1/2 overflow-hidden  md:h-[500px]  lg:h-auto border rounded shadow-lg '>
                <div>
                    <img src={props.departmentimage} className='shadow-lg'></img>
                    <h1 className='underline text-center text-2xl m-2'> <b>Department of {props.name}</b></h1>
                    <p className='p-3 text-justify '> {props.introduction} </p>
                </div>
                <div className='block m-2 p-2'>
                    <button className=' float-right text-green-500 '>Read More  &rarr;</button>
                </div>
            </div>
            {/* video */}
            <div className='flex flex-col'>
                <div className='flex justify-center items-center w-full md:w-1/2 my-3 md:m-auto'>

                <iframe className='block border p-0 shadow-lg rounded-xl h-[250px] w-[90%]'
                    src="https://www.youtube.com/embed/fd2hUOmm8kA?controls=0&amp;start=280&mute=1" title="NITJ" ></iframe>
            </div>

            <div className=''><Card title="Coding Club" image='https://qph.cf2.quoracdn.net/main-qimg-d0139b5cabcff7d5adad435605016120-lq'
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita." /> </div>
            </div>
        </div>
    )
}
export {
    Departmentupper,
    Departmentlower
}
