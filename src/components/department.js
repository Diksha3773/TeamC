import React from 'react'
import uuid from 'react-uuid'

const Departmentupper = () => {
  return (
    <div>


      {/* HOD SECTION */}
<div className='w-fit border-2 border-blue-400 mt-5 ml-[560px]  relative left-[430px] '>
  <h1 className='text-2xl ml-10'>Head Of Department</h1>  
<img className='h-[380px] w-[300px] ' src='https://www.nitj.ac.in/images/faculty/20071962443.jpg' width={400} ></img>
<p className='float-right'> ~Dr Geeta Sikka</p>
</div>

{/* Department Picture */}
<div className='w-fit border-2 border-blue-400 relative bottom-[400px] ml-10 '>
<img className='h-[400px] w-[432px] ' src='https://www.nitj.ac.in/cse/images/carousel/001_1.jpeg'  ></img>
</div >

{/* Department Introduction */}
<div className=' border-2 border-blue-400 relative bottom-[390px] h-[405px] ml-10 w-[495px] relative left-[435px] bottom-[805px] bg-[#045F5F] text-white'>
  <div className='text-l p-5 text-justify '>
    <h1 className='text-4xl pb-5'> Department of CSE</h1>
    Located in Jalandhar district of Punjab, NIT Jalandhar enjoys a really scenic environment 
    and pleasant weather. Established in the year 1987, as REC Jalandhar, NIT Jalandhar has been 
    declared as the Institute of National Importance under the Act of Parliament, 2007. Established
     in 1990 as the Department of Computer Science & Engineering, we have an excellent & rich history
      and an outstanding record of contributions to the profession and community.</div>
    <button className='bg-white text-green-500 ml-44 p-4 rounded-2xl hover:bg-orange-500 text-white '>Read More  &rarr;</button>
</div>

     </div>
  )
}



// Add news in this array between quotes
const news =['Congratulations to Yogita, B. Tech Final year, ECE Department for getting placed at Atlassian at a whopping CTC of 52LPA through an off-campus drive.',
                'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
              ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
            'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
              'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)' ];



 const Departmentlower=()=>{
 return(
  <div className=' border-2 border-blue-400 relative bottom-[780px] ml-10 w-[600px] h-96 overflow-scroll p-5 '> 
   <i className='text-6xl font-serif pb-5'>What's New ?</i>
   <ol>
  {
 
  news.map((n)=> <li key={uuid()} className='list-disc border-b-2 border-gray-500'>{n}</li>)
  }
  </ol>
  
  </div>
 )
}


export 
{
  Departmentupper,Departmentlower
};