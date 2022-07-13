import React from 'react'
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom'


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
    'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

const Departmentmiddle = () => {
    let navigate = useNavigate();
    const handleactivity = () => (navigate("/activities"))
    const handlenews = () => (navigate("/news"))
    const handlehighlights = () => (navigate("/highlights"))


    return (
        <div className='flex flex-col sm:mx-5
    md:flex-row justify-around lg:mx-12 '>

            {/*  Activity  */}
            <div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2 rounded border shadow-lg'>
                <i className='text-2xl font-serif text-center animate-pulse'><b>Activities</b></i>
                <div className='overflow-y-scroll scrollbar rounded-lg  border-t-2 border-green-500'>
                    <ol>
                        {
                            activity.map((n) => <li key={uuid()} className='list-[square] text-base p-3 list-inside  bg-green-100 hover:bg-yellow-400  '>{n}</li>)
                        }
                    </ol>
                </div>
                <div className='block'>
                    <button className='float-right bg-teal-600  w-20 h-10 p-2 m-4 text-white rounded-lg 
                       hover:bg-teal-800 hover:text-sm focus:ring-4 focus:ring-blue-300 ' onClick={handleactivity}>View All</button>
                </div>

            </div>
            {/* news */}
            <div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2 border rounded shadow-lg mx-2'>
                <i className='text-2xl font-serif text-center animate-pulse '><b>What's New ?</b></i>
                <div className='overflow-y-scroll scrollbar  rounded-lg shadow-lg  border-t-2 border-red-500'>

                    <ol>
                        {
                            news.map((n) => <li key={uuid()} className='list-disc text-base p-3 list-inside bg-red-100 hover:bg-yellow-400  '>{n}</li>)
                        }
                    </ol>
                </div>
                <div className='block'>
                    <button className='float-right bg-red-500  w-20 h-10 p-2 m-4 text-white rounded-lg 
                       hover:bg-red-700 hover:text-sm focus:ring-4 focus:ring-blue-300 'onClick={handlenews}>View All</button>
                </div>
                {/* highlights */}
            </div>
            {/* highlights */}
            <div className='flex flex-col md:w-[45%] lg:w-1/2 h-[500px] my-4 p-2 border rounded shadow-lg'>
                <i className='text-2xl font-serif text-center animate-pulse'><b>Highlights</b></i>
                <div className='overflow-y-scroll scrollbar rounded-lg shadow-md  border-t-2 border-blue-500'>

                    <ol>
                        {
                            highlights.map((n) => <li key={uuid()} className='list-[square] text-base p-3 list-inside bg-blue-100 hover:bg-yellow-400  '>{n}</li>)
                        }
                    </ol>
                </div>
                <div className='block'>
                    <button className='float-right bg-blue-600  w-20 h-10 p-2 m-4 text-white rounded-lg 
                       hover:bg-blue-800  hover:text-sm focus:ring-4 focus:ring-blue-300'onClick={handlehighlights}>View All</button>
                </div>

            </div>


        </div>
    )
}

export default Departmentmiddle