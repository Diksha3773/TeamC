import React from 'react'
import uuid from 'react-uuid';

const news = ['Congratulations to Yogita, B. Tech Final year, ECE Department for getting placed at Atlassian at a whopping CTC of 52LPA through an off-campus drive.',
  'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
  ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
  'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
  'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
  'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

const Departmentupper = (props) => {
  return (
    <div className='flex flex-col 
                    sm:flex-row justify-evenly '>
      {/* department  */}
      <div className=' m-2   overflow-scroll overflow-x-hidden  md:h-[500px]  lg:h-auto'>
        <img src={props.departmentimage} ></img>
        <div >
          <h1 className='underline text-center '> <b>Department of {props.name}</b></h1>
          <p className='p-3 text-justify '> {props.introduction} </p>
          <button className='float-right text-green-500 '>Read More  &rarr;</button>
        </div>
      </div>
      {/* hod */}
      <div className='hidden sm:block m-10  md: m-1  w-[2000px]'>
        <h1 className='float-left text-3xl text-[#045F5F] '><b>Head Of Department</b></h1>
        <img className=' border-8 border-teal-900 rounded-md' src={props.hod} width={400} ></img>
        <p className='float-left text-teal-900'>{props.nameofhod}</p>
      </div>
    </div>

  )
}


const Departmentlower = (props) => {
  return (
    <div className=' h-[500px]  mt-10  m-3 flex flex-col   md:flex-row justify-evenly'>
      <div className=' overflow-scroll overflow-x-hidden lg:w-96 xl:w-[600px]'>
        <i className='text-2xl font-serif '><b>What's New ?</b></i>
        {/* news */}
        <ol>
          {
            news.map((n) => <li key={uuid()} className='list-disc border-b-2  border-gray-300 text-sm p-3 list-inside '>{n}</li>)
          }
        </ol>
        <button className='bg-[#21b684] text-white float-right rounded-lg p-1'>View All</button>
      </div>
      {/* video */}

      <iframe className=' mt-10  w-[200px] rounded-2xl sm: ml-20  h-96 md:w-[560px] lg: h-[315px] w-[460px]'
        src="https://www.youtube.com/embed/fd2hUOmm8kA?controls=0&amp;start=280&mute=1" title="NITJ" ></iframe>
    </div>
  )
}
export {
  Departmentupper,
  Departmentlower
}