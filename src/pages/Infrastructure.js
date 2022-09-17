import React from "react";
const images = [{ src: 'https://upload.wikimedia.org/wikipedia/commons/5/55/IT_Building%2C_NIT_Jalandhar_05.JPG', title: "Welcome" },
{ src: 'https://austincourt.theiet.org/media/1179/image-of-the-kingston-lecture-theatre.jpg?anchor=center&mode=crop&format=webp&quality=80&width=920&height=690&rnd=132791989990000000', title: "Lecture Theatre" },
{ src: 'https://www.nitj.ac.in/nitj_files/links/cc_lab2_05_92038.jpg', title: "Computer Lab" },
{ src: 'https://www.nitj.ac.in/cce/Images/NKN_Hall_NITJ.jpg', title: "NKN Hall" }]

function Infrastructure() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex items-center justify-center p-4 mt-4">
        <h1 class="mt-10 text-4xl italic font-semibold">Infrastructure</h1>
      </div>
      <hr />
      <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 m-4 p-2 place-items-center gap-4 antialiased text-gray-900">
        {
          images.map((item, i) => {
            return (
              <div key={i} className='m-4 p-2'>
                <img src={item.src} alt=" random imgee" class="w-full border-2 object-cover object-center rounded-lg shadow-md" />

                <div class="relative px-4 -mt-12  ">
                  <div class="max-w-fit mx-auto bg-white flex items-center justify-center p-6 rounded-lg shadow-lg">
                    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{item.title}</h4>
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

