import React from "react";
const Achievement = [{ src: 'https://www.nitj.ac.in//images/photo_gallery/Republic_Day_2021_2_26426_35_28452.jpg', content: "Online Inauguration of Academic Building and Student Welfare Centre & Foundation Stone Laying Ceremony of Boys and Girls Hostels (29th December, 2020)" },
{ src: 'https://www.nitj.ac.in//images/photo_gallery/2_28_2305.jpg', content: "Alumni Meet 2020 - Inauguration of 1st International Chapter of NITJAA at New York, USA" }, { src: 'https://www.nitj.ac.in//images/photo_gallery/Republic_Day_2021_2_26426_35_28452.jpg', content: "Online Inauguration of Academic Building and Student Welfare Centre & Foundation Stone Laying Ceremony of Boys and Girls Hostels (29th December, 2020)" },
{ src: 'https://www.nitj.ac.in//images/photo_gallery/2_28_2305.jpg', content: "Alumni Meet 2020 - Inauguration of 1st International Chapter of NITJAA at New York, USA" }
]

function Achievements() {
  return (
    <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
      <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Achievements</div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 mx-auto" >
        {
          Achievement.map((item, i) => {
            return (
              <div key={i} className="relative min-w-0 max-w-md break-words bg-white m-2 mb-6 shadow-lg rounded-xl mt-16 border">
                <div className="flex flex-col break-words bg-white rounded-xl bg-clip-border transition-all flex-auto">
                  <div className="transition-all mx-4 -mt-10 border-2 rounded-lg shadow-2xl overflow-hidden bg-black">
                    <img
                      className="w-full h-full"
                      src={item.src}
                      alt="tailwind-card-image"
                    />
                  </div>
                  <div className="flex-auto p-6">
                    <p className="text-lg text-gray-900 mb-4">
                      {item.content}
                    </p>
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

export default Achievements

