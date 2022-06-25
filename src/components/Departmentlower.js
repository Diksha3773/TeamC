import React from 'react'

const Departmentlower = (props) => {
  return (
    <div className='flex flex-col sm:mx-5
    md:flex-row justify-evenly lg:mx-12 '>
        {/* mission and vision */}
<div className='flex shadow-lg flex-col m-4 p-2 items-center justify-center md:w-[60%] lg:w-2/3 h-[500px] bg-teal-50 shadow-md shadow-green-600 '>
                <h1 className='text-2xl  lg:text-4xl text-[#045F5F]  '><b>Mission and Vision</b></h1>
             <p className='text-center mb-10 p-1 md:text-lg md:p-2 overflow-y-scroll scrollbar'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.Lorem ipsum dolor 
             sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita</p>
        </div> 
              {/* HOD */}
        <div className='flex border rounded shadow-lg flex-col m-4 p-2 items-center justify-center md:w-[35%] lg:w-2/3 h-[500px]  shadow-md shadow-green-800 '>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl md:text-xl lg:text-3xl text-[#045F5F] m-2'><b>Head Of Department</b></h1>
                <img className='border rounded-4 shadow-lg rounded-teal-900 rounded-md m-4 h-72 w-56 md:h-52 md:w-40 ' src={props.hod} alt=''/>
            </div>
            <h1 className='text-teal-900 text-lg md:text-xl font-medium '>{props.nameofhod}</h1>
            <p className='text-center p-1 md:text-lg md:p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem optio nam consectetur expedita.</p>
        </div>
     


</div>
  )
}

export default Departmentlower