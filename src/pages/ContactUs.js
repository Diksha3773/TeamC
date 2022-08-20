import React from 'react'

function ContactUs() {
  return (
    <div className='flex flex-col m-16'>
      <h1 className=' top-2 text-center text-2xl font-bold md:font-extrabold md:text-4xl text-orange-600 font-serif m-2'>ContactUs</h1>
      <div className='flex1 bg-green-50 shadow-lg shadow-blue-500/50 p-8 rounded-md'>
        <div className=' w-11/12 mx-9'>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 ">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest">ADDRESS</h2>
              <p className="mt-1">Grand Trunk Road, Barnala Amritsar Bypass Rd Jalandhar, Punjab-144011, India</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">abc@nitj.ac.in</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">111-444-7890</p>
            </div>
          </div>

          <div className="mt-2">
            <div className="pt-2 flex items-center justify-center text-lg text-white">
              <a href="/" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa-brands fa-facebook-f"></i></a>
              <a href="/" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa fa-instagram"></i></a>
              <a href="/" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa fa-twitter"></i></a>
              <a href="/" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs