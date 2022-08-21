import React from "react";
const images = [{ src: 'https://upload.wikimedia.org/wikipedia/commons/5/55/IT_Building%2C_NIT_Jalandhar_05.JPG', title: "Welcome" },
{ src: 'https://austincourt.theiet.org/media/1179/image-of-the-kingston-lecture-theatre.jpg?anchor=center&mode=crop&format=webp&quality=80&width=920&height=690&rnd=132791989990000000', title: "Lecture Theatre" },
{ src: 'https://www.nitj.ac.in/nitj_files/links/cc_lab2_05_92038.jpg', title: "Computer Lab" },
{ src: 'https://www.nitj.ac.in/cce/Images/NKN_Hall_NITJ.jpg', title: "NKN Hall" }]

function Infrastructure() {
  return (
   
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-10 text-4xl font-bold   text-orange-600">Infrastructure</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 mx-auto" >
          {
            images.map((item,i) => {
              return (
                <div key={i} className="relative min-w-0 max-w-md break-words bg-white  shadow-md rounded-xl mt-5 mx-2 my-2  hover:shadow-2xl">
                   <div className="flex-auto p-3 text-center">
                      <p className="text-lg text-blue-700 mb-4"><b>
                        {item.title}</b>
                      </p>
                    </div>
                  <div className="flex flex-col break-words  rounded-xl bg-clip-border transition-all flex-auto p-3">
                    <div className="transition-all mx-2 -mt-10 border-2 border-gray-200 rounded-lg shadow-2xl overflow-hidden shadow-gray-400">
                      <img
                        className="w-full h-full "
                        src={item.src}
                        alt="image"
                      />
                    </div>
                   
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )

      

    }
    
    
 
  
  
export default Infrastructure

