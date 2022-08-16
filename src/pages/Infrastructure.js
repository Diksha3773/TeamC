import React from "react";
import uuid from "react-uuid";
const images = [{ src: 'https://upload.wikimedia.org/wikipedia/commons/5/55/IT_Building%2C_NIT_Jalandhar_05.JPG', title: "Welcome" },
{ src: 'https://austincourt.theiet.org/media/1179/image-of-the-kingston-lecture-theatre.jpg?anchor=center&mode=crop&format=webp&quality=80&width=920&height=690&rnd=132791989990000000', title: "Lecture Theatre" },
{ src: 'https://www.nitj.ac.in/nitj_files/links/cc_lab2_05_92038.jpg', title: "Computer Lab" },
{ src: 'https://www.nitj.ac.in/cce/Images/NKN_Hall_NITJ.jpg', title: "NKN Hall" }]

function Infrastructure() {
  return (
    images.map((item) => {
      return (
        <div className='flex flex-col md:flex-row w-[98%] justify-center items-center p-4 place-items-center mx-auto'>

          <div key={uuid()} className='flex flex-col m-2 p-1 sm:m-4 sm:p-2 items-center justify-center w-full sm:w-4/5 md:w-4/5 h-[600px] bg-green-50 shadow-md shadow-green-200 '>
            <h1 className="text-centre text-2xl text-red-600"><b>{item.title}</b></h1>
            <img src={item.src} className="overflow-clip rounded-lg  w-full sm:w-4/5 md:w-2/2 h-[500px]"alt="..."/>
          </div>
      
        </div>
      )

    }
    
    
 
  
    )
  )
}

export default Infrastructure

