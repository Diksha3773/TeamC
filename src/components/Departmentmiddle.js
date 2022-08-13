import React from 'react'
// import { useNavigate } from 'react-router-dom'


const News = ['Congratulations to Yogita, B. Tech Final year, ECE Department for getting placed at Atlassian at a whopping CTC of 52LPA through an off-campus drive.',
    'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
    ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
    'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
    'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
    'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

const Activity = ['Website Launch by Mr. Ravneet Kotwal, (Director of Sales and Marketing, Texas Instruments, India. )',
    'Short Term Courseon Low Power VLSI Design for Communication systems and Networks', 'Congratulations to Yogita, B. Tech Final year, ECE Department for getting placed at Atlassian at a whopping CTC of 52LPA through an off-campus drive.',
    'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
    ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
    'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
    'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
    'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

// const highlights = ['Applications are Invited for the ', 'Selected Candidates for PhD', 'Online GIAN Course on "Nonwoven Technology and Recent Developments" ',
//     '(June 20 - 24, 2022)Note: The Last Date for Registration has been extended upto 18th June, 2022', 'Self Sponsored Three Days Workshop on "Molecular Dynamics Simulation & Analysis" (August 05 - 07, 2022) ',
//     'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
//     ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
//     'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
//     'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
//     'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

const Departmentmiddle = () => {
    return (
        <div className='flex flex-col lg:h-96 overflow-hidden lg:flex-row p-4 m-2 shadow rounded border bg-blue-100'>

            {/* Activity  */}
            <div className='flex flex-col w-full lg:w-1/2 h-[22rem]'>
                <span className='text-2xl font-medium mx-auto p-1'>Activities</span>
                <div className='w-full h-full overflow-y-auto overflow-x-hidden scrollbar shadow-inner bg-white rounded-b '>
                    <div className=''>
                        {
                            Activity.map((n, i) =>
                                <div key={i} className='flex p-2 m-2'>
                                    <li className='list-[circle] list-inside'></li>
                                    <span className={"mx-1 border-b pb-2 text-justify text-gray-600 font-sans "}>{n}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full lg:w-1/2 h-[22rem]'>
                <span className='text-2xl font-medium mx-auto p-2 lg:p-1'>News & Highlights</span>
                <div className='w-full h-full overflow-y-auto overflow-x-hidden scrollbar shadow-inner bg-white'>
                    <ol>
                        {
                            News.map((n, i) =>
                                <div key={i} className='flex p-2 m-2'>
                                    <li className='list-[circle] list-inside'></li>
                                    <span className={"mx-1 border-b pb-2 text-justify text-gray-600 font-sans "}>{n}</span>
                                </div>
                            )
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Departmentmiddle