import React, { useEffect } from 'react'
import { useState } from 'react'
import sy from '../components/Img/sy.png'
import sy6 from '../components/Img/syl-5.jpg'
import pdf from '../components/Vedio/pdf_ani.mp4'
import syllabuspdf from '../components/Pdf/syllabus.pdf'
function Syllabus() {
  const List = [
    {
      Program: 'Btech',
      sem: [
        '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'
      ]
    },
    {
      Program: 'Mtech',
      sem: [
        '1st', '2nd', '3rd', '4th'
      ]
    }
  ]
  const Mtech = [
    sy6, sy, sy6, sy
  ]
  const Btech = [
    sy, sy6, sy, sy6, sy, sy6, sy, sy6
  ]
  const [program, setProgram] = useState('Btech');
  const [bsem, setBsem] = useState('1st');
  // const [msem, setMsem] = useState('1st');
  const [overview, setOverview] = useState(true);
  
  
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full py-3 bg-all'>
        <div className='m-2 p-2 shadow-lg'><span className='text-white text-opacity-70 font-bold text-4xl italic'>Syllabus</span></div>
        <div className='w-full p-1 flex items-center justify-center'>
          <select defaultValue={program} onChange={(e) => { setProgram(e.target.value) }} className='border text-lg font-medium rounded-md focus:border-gray-200 shadow-md w-1/2 p-2'>
            <option value='Btech' className='p-2'>Btech</option>
            <option value="Mtech" className='p-2'>Mtech</option>
          </select>
        </div>
        <div className='w-full p-1 flex items-center justify-center'>
          {
            List.map((item, i) => {
              return item.Program === program ? (
                <select key={i} className='border rounded-md text-lg font-medium focus:border-gray-200 shadow-md w-1/3 p-2' defaultValue={bsem} onChange={(e) => { setBsem(e.target.value) }}>
                  {item.sem.map((item1, j) => {
                    return <option value={item1} key={j} >{item1} Sem</option>
                  })}
                </select>
              ) : <></>
            })
          }
          {/* </select> */}
        </div>

        <div className='m-4 rounded-lg shadow-md'>
          <div className='block rounded-t-lg shadow h-12 md:h-16 w-[11.7rem] bg-linear text-white'>
            <button className={"h-full mr-1 p-2 float-left text-lg md:text-xl rounded-tl-lg font-medium " + (overview ? 'bg-gray-500' : '')} onClick={() => { setOverview(true) }} >Overview</button>
            <button className={"h-full ml-1 p-2 float-right max-w-max text-lg md:text-xl rounded-tr-lg font-medium " + (overview ? '' : 'bg-gray-500')} onClick={() => { setOverview(false) }}>Details</button>
          </div>
          <div className='flex w-full h-full shadow-lg bg-linear rounded-b-md p-8 items-center justify-start'>
            {
              List.map((item, i) => {
                return item.Program === program && program === 'Btech' ? (
                  <div key={i}>
                    {item.sem.map((item1, j) => {
                      return item1 === bsem ?
                        overview ? <img src={Btech[j]} alt='...' className='aspect-auto' /> :
                          <div key={j} className='flex items-center justify-center'>
                            <video loading="lazy" muted="muted" src={pdf} width="100" height="100" type="video/mp4" autoPlay="autoplay" loop="loop" className='rounded-lg'></video>
                            <div className='flex flex-col justify-center items-center m-2 w-52 h-52'>
                              <div className='block my-2 mx-0 md:m-2'>
                                <button type="button" class="text-gray-900 flex items-center justify-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-1 md:mr-2 mb-2">
                                  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                  <span className='text-base md:text-lg  md:font-medium'>Download</span>
                                </button>
                              </div>
                              <div className='block'>
                                <a href={syllabuspdf} target='_blank' rel='noreferrer' class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                  <span className='text-lg font-medium'>View Pdf</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        : <></>
                    })}
                  </div>
                ) : item.Program === program && program === 'Mtech' ? (
                  <div key={i}>
                    {item.sem.map((item1, j) => {
                      return item1 === bsem ?
                        overview ? <img src={Mtech[j]} alt='...' className='aspect-auto' /> :
                          <div key={j} className='flex items-center justify-center'>
                            <video loading="lazy" muted="muted" src={pdf} width="100" height="100" type="video/mp4" autoPlay="autoplay" loop="loop" className='rounded-lg'></video>
                            <div className='flex flex-col justify-center items-center m-2 w-52 h-52'>
                              <div className='block m-2'>
                                <button type="button" class="text-gray-900 flex items-center justify-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                  <span className='text-lg font-medium'>Download Pdf</span>
                                </button>
                              </div>
                              <div className='block'>
                                <a href={syllabuspdf} target='_blank' rel='noreferrer' class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                  <span className='text-lg font-medium'>View Pdf</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        : <></>
                    })}
                  </div>
                ) : <></>
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Syllabus