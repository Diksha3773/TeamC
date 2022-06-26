import React from 'react'

const Departmentlower = (props) => {
  return (
    <div className='flex flex-col md:flex-row w-[98%] justify-center items-center p-4 place-items-center mx-auto'>
      {/* mission and vision */}
      <div className='flex flex-col m-2 p-1 sm:m-4 sm:p-2 items-center justify-center w-full sm:w-4/5 md:w-1/2 h-[500px] bg-teal-50 shadow-md shadow-green-200 '>
        <h1 className='text-2xl  lg:text-4xl text-[#045F5F]  '><b>Mission and Vision</b></h1>
        <p className='text-justify m-4 p-1 md:text-lg md:p-2 overflow-y-scroll scrollbar'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita</p>
      </div>
      {/* HOD */}
      <div className='flex border rounded flex-col m-2 p-1 sm:m-4 sm:p-2 items-center justify-center w-full sm:w-4/5 md:w-1/2 h-[500px]  shadow-md shadow-green-200 '>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl md:text-xl lg:text-3xl text-[#045F5F] m-2'><b>Head Of Department</b></h1>
          <img className='border rounded-4 shadow-lg rounded-teal-900 rounded-md m-4 h-72 w-56 md:h-52 md:w-40 ' src={props.hod} alt='' />
        </div>
        <h1 className='text-teal-900 text-lg md:text-xl font-medium '>{props.nameofhod}</h1>
        <p className='text-justify p-1 md:text-lg md:p-2 sm:p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.</p>
      </div>
    </div>
  )
}

export default Departmentlower