// import React from 'react'

// function Achievements() {
//   return (
//     <div className='text-4xl'></div>
//   )
// }

// export default Achievements
import React from "react";
import uuid from "react-uuid";
const images = [{ src: 'https://www.nitj.ac.in//images/photo_gallery/Republic_Day_2021_2_26426_35_28452.jpg', content: "Online Inauguration of Academic Building and Student Welfare Centre & Foundation Stone Laying Ceremony of Boys and Girls Hostels (29th December, 2020)" },
{ src: 'https://www.nitj.ac.in//images/photo_gallery/2_28_2305.jpg', content: "Alumni Meet 2020 - Inauguration of 1st International Chapter of NITJAA at New York, USA" },{ src: 'https://www.nitj.ac.in//images/photo_gallery/Republic_Day_2021_2_26426_35_28452.jpg', content: "Online Inauguration of Academic Building and Student Welfare Centre & Foundation Stone Laying Ceremony of Boys and Girls Hostels (29th December, 2020)" },
{ src: 'https://www.nitj.ac.in//images/photo_gallery/2_28_2305.jpg', content: "Alumni Meet 2020 - Inauguration of 1st International Chapter of NITJAA at New York, USA" }
]

function Achievements() {
  return (
    images.map((item) => {
      return (
        <div  >

          <div key={uuid()} className=" flex flex-row  justify-around">
            <div className="w-5/6">
            <img src={item.src} className="  m-7 overflow-auto rounded-lg   h-[400px] "alt="..."/></div>
            <div className=" p-12 text-blue-500 bg-blue-100 rounded-md text-center text-2xl overflow-auto w-2/4 m-7 "> {item.content}</div>
          </div>
      
        </div>
      )

    }
    
    
 
  
    )
  )
}

export default Achievements

