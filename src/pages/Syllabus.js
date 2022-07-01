import React from 'react'
import { useState } from 'react'
import sy from '../components/Img/sy.png'
import sy6 from '../components/Img/syl-5.jpg'
import download from '../components/Vedio/download.mp4'
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
  const [overview, setOverview] = useState(true)
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full py-3 bg-emerald-200'>
        <div className='m-2 p-2 shadow-lg'><span className='text-zinc-900 text-opacity-70 font-bold text-4xl italic'>Syllabus</span></div>
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
        <div className='m-3 rounded-lg border shadow-md bg-slate-50'>
          <div className='flex items-center rounded-t-lg shadow h-14 bg-emerald-300'>
            <button className={"p-2 h-full text-xl rounded-tl-lg font-medium " + (overview ? 'bg-emerald-500' : '')} onClick={() => { setOverview(true) }} >Overview</button>
            <button className={"p-2 h-full text-xl font-medium " + (overview ? '' : 'bg-emerald-500')} onClick={() => { setOverview(false) }}>Details</button>
          </div>
          <div className='flex w-full h-full shadow-lg border bg-emerald-300 rounded-b-md p-4 items-center justify-start'>
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
                              <div className='block'>
                                <button className='bg-teal-600 h-10 p-2 m-4 text-white rounded-lg hover:bg-teal-800 hover:text-sm focus:ring-4 focus:ring-blue-300 '>Download pdf</button>
                              </div>
                              <div className='block'>
                                <a href={syllabuspdf} target='_blank' className=' bg-teal-600 h-10 p-2 m-4 text-white rounded-lg hover:bg-teal-800 hover:text-sm focus:ring-4 focus:ring-blue-300 '>View pdf</a>
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
                              <div className='block'>
                                <button className='bg-teal-600 h-10 p-2 m-4 text-white rounded-lg hover:bg-teal-800 hover:text-sm focus:ring-4 focus:ring-blue-300 '>Download pdf</button>
                              </div>
                              <div className='block'>
                                <a href={syllabuspdf} target='_blank' className=' bg-teal-600 h-10 p-2 m-4 text-white rounded-lg hover:bg-teal-800 hover:text-sm focus:ring-4 focus:ring-blue-300 '>View pdf</a>
                              </div>
                            </div>
                          </div>
                        : <></>
                    })}
                  </div>
                ) : <></>
              })
            }
            {/* {
              overview ?
                <img src={sy6} alt='...' className='aspect-auto' /> :
                <div className='flex items-center justify-center'>
                  <video loading="lazy" muted="muted" src={pdf} width="100" height="100" type="video/mp4" autoplay="autoplay" loop="loop" className='rounded-lg'></video>
                  <div className='flex flex-col justify-center items-center m-2 w-52 h-52'>
                    <button className='flex items-center justify-center w-44 h-24'><img src={download} alt='...' className='w-44 h-24 hover:w-[10.5rem] hover:h-[5.5rem]' /></button>
                    <div className='block'>
                      <button className='float-right bg-teal-600  w-40 h-[3.2rem] p-2 m-2 text-white rounded-full hover:bg-teal-800 text-xl hover:text-lg shaow-lg focus:ring-4 focus:ring-blue-300 '>View pdf</button>
                    </div>
                  </div>
                </div>
            } */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Syllabus