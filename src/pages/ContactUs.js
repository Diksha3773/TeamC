import React from 'react'

function ContactUs() {
  return (
    <div className='flex flex-col mb-4 mt-20 m-16'>
      <h1 className=' top-2 text-center text-2xl font-bold md:font-extrabold md:text-4xl text-orange-600 font-serif m-2'>ContactUs</h1>
      <div className='flex1 bg-green-50 shadow-lg shadow-blue-500/50 p-8 rounded-md'>
         <div className=' w-11/12 mx-9'>    
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6 ">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Grand Trunk Road, Barnala Amritsar Bypass Rd Jalandhar, Punjab-144011, India</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">abc@nitj.ac.in</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">111-444-7890</p>
        </div>
      </div>

                    <div className="mt-2">
                        <div className="text-center">
                            <div className="pt-2 text-xl text-white">
                                <a href='/' className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 mx-1 inline-block pt-1" ><i className="fa-brands fa-facebook-f"></i></a>
                                <a href='/' className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 mx-1 inline-block pt-1" ><i className="fa fa-instagram"></i></a>
                                <a href='/' className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 mx-1 inline-block pt-1" ><i className="fa fa-twitter"></i></a>
                                <a href='/' className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 mx-1 inline-block pt-1" ><i className="fa fa-linkedin"></i></a>
                            </div>
                            </div>
                
                            </div>
      
      </div>
      
    </div>
    </div>
  )
}

export default ContactUs